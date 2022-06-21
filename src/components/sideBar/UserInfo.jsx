import React, { useContext } from "react";
import { Context } from "../../index";
import classes from "./styles/userInfo.module.css";
import defaultAvatar from "../../assets/default-ava.png";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../../utils/consts";

const UserInfo = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const isAuth = user.isAuth;
  const login = user.login;

  const logout = () => {
    user.logOut();
    navigate(MAINPAGE_ROUTE);
  };

  return (
    <div>
      {isAuth ? (
        <div className={classes.userInfo}>
          <img className={classes.avatar} src={defaultAvatar} />
          <h5>{user.login}</h5>
          <a href="" onClick={logout}>
            Выйти
          </a>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default UserInfo;
