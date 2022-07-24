import React, { useContext, useEffect } from "react";
import { getClass } from "../utils/cssClasses";
import classes from "./styles/navBar.module.css";
import AppButton from "./common/AppButton";
import { Context } from "../index";
import MainPageLogo from "./mainPage/MainPageLogo";
import { observer } from "mobx-react-lite";

const NavBar = observer(({ className }) => {
  const { user, appState } = useContext(Context);
  const isAuth = user.isAuth;

  useEffect(() => {
    user.tryLoginByToken();
  });

  const switchSideBar = () => {
    appState.setSideBar(!appState.sideBar);
  };

  const switchFriendsBar = () => {
    appState.setFriends(!appState.friends);
  };

  return (
    <div className={getClass([className, classes.navBar])}>
      {isAuth ? (
        <AppButton className={classes.navButton} onClick={switchSideBar}>
          Menu
        </AppButton>
      ) : (
        <div />
      )}
      <MainPageLogo />
      {isAuth ? (
        <AppButton className={classes.navButton} onClick={switchFriendsBar}>
          Friends
        </AppButton>
      ) : (
        <div />
      )}
    </div>
  );
});

export default NavBar;
