import React, { useContext, useEffect, useMemo } from "react";
import AppButton from "../common/AppButton";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/sideBar.module.css";
import UserInfo from "./UserInfo";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { CREATE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

const SideBar = observer(({ className, children }) => {
  const { user, appState, translationResult } = useContext(Context);

  const isAuth = user.isAuth;
  const sideBarState = appState.sideBar;

  const navigate = useNavigate();

  const createNewCard = () => {
    if (!translationResult) return;
    translationResult.reset();
    navigate(CREATE_ROUTE);
  };

  return (
    <div>
      {isAuth && sideBarState ? (
        <div className={getClass([className, classes.sideBar])}>
          <UserInfo />
          <AppButton onClick={createNewCard}>New card</AppButton>
          <AppButton>Cards list</AppButton>
          <AppButton>Run test</AppButton>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
});

export default SideBar;
