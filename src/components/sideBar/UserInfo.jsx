import React, { useContext } from "react";
import { Context } from "../../index";
import classes from "./styles/userInfo.module.css";
import classesCommon from "../common/styles/common.module.css";
import defaultAvatar from "../../assets/default-ava.png";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../../utils/consts";
import { getClass } from "../../utils/cssClasses";

const UserInfo = ({ className }) => {
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
      {isAuth && (
        <div className={getClass([className, classes.userInfo])}>
          <img className={classes.avatar} src={defaultAvatar} alt={""} />
          <h5>{login}</h5>
          <div
            className={getClass([classes.navLink, classesCommon.navLink])}
            onClick={logout}
          >
            Выйти
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
