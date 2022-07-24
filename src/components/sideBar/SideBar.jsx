import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AppButton from "../common/AppButton";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/sideBar.module.css";
import animClasses from "./../common/styles/animation.module.css";
import UserInfo from "./UserInfo";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { CARDS_LIST_ROUTE, CREATE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { Transition } from "react-transition-group";

const SideBar = observer(() => {
  const { user, appState, translationResult, cards } = useContext(Context);

  const isAuth = user.isAuth;
  const sideBarState = appState.sideBar;

  const navigate = useNavigate();

  const createNewCard = () => {
    if (!translationResult) return;
    translationResult.reset();
    navigate(CREATE_ROUTE);
  };

  const showCardsList = useCallback(() => {
    cards.updateList();
    navigate(CARDS_LIST_ROUTE);
  }, []);

  return (
    <Transition
      in={sideBarState}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {(state) => (
        <div>
          {isAuth ? (
            <div className={getClass([classes[state], classes.sideBar])}>
              <UserInfo
                className={getClass([animClasses[state], animClasses.item])}
              />
              <AppButton
                className={getClass([animClasses[state], animClasses.item])}
                onClick={createNewCard}
              >
                Создать карточку
              </AppButton>
              <AppButton
                className={getClass([animClasses[state], animClasses.item])}
                onClick={showCardsList}
              >
                Список карточек
              </AppButton>
              <AppButton
                className={getClass([animClasses[state], animClasses.item])}
              >
                Пройти тест
              </AppButton>
            </div>
          ) : (
            <div />
          )}
        </div>
      )}
    </Transition>
  );
});

export default SideBar;
