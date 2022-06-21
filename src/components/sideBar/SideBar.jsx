import React, { useContext, useEffect, useMemo } from "react";
import AppButton from "../AppButton";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/sideBar.module.css";
import UserInfo from "./UserInfo";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const SideBar = observer(({ className, children }) => {
  const { user, appState } = useContext(Context);

  const isAuth = user.isAuth;
  const sideBarState = appState.sideBar;

  return (
    <div>
      {isAuth && sideBarState ? (
        <div className={getClass([className, classes.sideBar])}>
          <UserInfo />
          <AppButton>New card</AppButton>
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
