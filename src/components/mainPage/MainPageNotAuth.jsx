import React from "react";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/main.module.css";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../utils/consts";

const MainPageNotAuth = () => {
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate(LOGIN_ROUTE);
  };

  const navToRegistration = () => {
    navigate(REGISTER_ROUTE);
  };

  return (
    <div className={getClass([classes.mainPageContainer])}>
      <div className={getClass([classes.mainPageText])}>
        <h5>
          Для использования переводчика нужно{" "}
          <a href={""} onClick={navToLogin}>
            войти
          </a>{" "}
          или{" "}
          <a href={""} onClick={navToRegistration}>
            зарегистрироваться
          </a>
          {"."}
        </h5>
      </div>
    </div>
  );
};

export default MainPageNotAuth;
