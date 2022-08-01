import React, { useContext, useState } from "react";
import { Context } from "../../index";
import classes from "./styles/createCard.module.css";
import animClasses from "./../common/styles/animation.module.css";
import AppButton from "../common/AppButton";
import { getClass } from "../../utils/cssClasses";
import StyledInput from "../common/StyledInput";
import { Transition } from "react-transition-group";

const Search = () => {
  const [expression, setExpression] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  const { translationResult } = useContext(Context);

  const fetchTranslationResult = async () => {
    if (!expression) return;

    translationResult.translateExpression(expression);
    switchIsMinimized();
  };

  const onPressEnter = (event) => {
    if (event.code === "Enter") {
      fetchTranslationResult();
    }
  };

  const switchIsMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Transition in={isMinimized} timeout={1000}>
      {(state) => (
        <div
          className={getClass([
            classes.panel,
            classes[state],
            classes.searchContainer,
          ])}
        >
          <StyledInput
            label={"Введите выражение"}
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            onKeyPress={onPressEnter}
            autoFocus={true}
            className={getClass([animClasses.itemReversed, animClasses[state]])}
          />

          <AppButton
            className={getClass([
              animClasses.itemReversed,
              animClasses[state],
              classes.searchButton,
            ])}
            onClick={fetchTranslationResult}
          >
            Перевести
          </AppButton>

          <div className={classes.hideButton} onClick={switchIsMinimized}>
            <div
              className={getClass([
                classes.arrow,
                classes[state],
                isMinimized && classes.minimized,
              ])}
            />
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Search;
