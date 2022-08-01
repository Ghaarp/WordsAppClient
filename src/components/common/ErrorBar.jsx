import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import classes from "./styles/error.module.css";
import commonClasses from "./../../styles/common.module.css";
import { getClass } from "../../utils/cssClasses";
import { Transition } from "react-transition-group";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";

const ErrorBar = observer(() => {
  const { error } = useContext(Context);
  const { errorQueue } = error;

  const [isShowError, setIsShowError] = useState(false);
  const [isNewErrorEnabled, setIsNewErrorEnabled] = useState(true);
  const [currentError, setCurrentError] = useState();
  const [hidingTimeout, setHidingTimeout] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (isShowError || !isNewErrorEnabled) return;

    if (errorQueue.length) {
      setIsShowError(true);
      setIsNewErrorEnabled(false);
      setCurrentError(errorQueue.shift());
    }
  }, [errorQueue, isShowError, isNewErrorEnabled]);

  useEffect(() => {
    if (!currentError) return;

    switch (currentError.status.toString()) {
      case "401":
        navigate(LOGIN_ROUTE);
        break;

      default:
        break;
    }
  }, [navigate, currentError]);

  const hideError = () => {
    setIsShowError(false);
  };

  const setDelay = () => {
    setHidingTimeout(setTimeout(hideError, 3000));
  };

  const enableNewError = () => {
    clearTimeout(hidingTimeout);
    setIsNewErrorEnabled(true);
  };

  return (
    <Transition
      in={isShowError}
      timeout={300}
      mountOnEnter={true}
      unmountOnExit={true}
      onEntering={setDelay}
      onExited={enableNewError}
    >
      {(state) => {
        return (
          <div className={getClass([classes.errorBar, classes[state]])}>
            <div
              className={classes.errorText}
            >{`(${currentError.status})${currentError.errorMessage}`}</div>
            <div
              className={getClass([
                commonClasses.unselectable,
                classes.buttonClose,
              ])}
              onClick={hideError}
            >
              X
            </div>
          </div>
        );
      }}
    </Transition>
  );
});

export default ErrorBar;
