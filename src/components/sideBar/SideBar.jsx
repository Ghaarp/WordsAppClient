import React, { useCallback, useContext, useEffect, useMemo } from "react";
import AppButton from "../common/AppButton";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/sideBar.module.css";
import UserInfo from "./UserInfo";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { CARDS_LIST_ROUTE, CREATE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

const SideBar = observer(({ className, children }) => {
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
    <div>
      {isAuth && sideBarState ? (
        <div className={getClass([className, classes.sideBar])}>
          <UserInfo />
          <AppButton onClick={createNewCard}>Создать карточку</AppButton>
          <AppButton onClick={showCardsList}>Список карточек</AppButton>
          <AppButton>Пройти тест</AppButton>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
});

export default SideBar;
