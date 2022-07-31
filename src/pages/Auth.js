import React, { useCallback, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import classes from "./styles/auth.module.css";
import classesCommon from "../components/common/styles/common.module.css";
import AppButton from "../components/common/AppButton";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTER_ROUTE } from "../utils/consts";
import StyledInput from "../components/common/StyledInput";

const Auth = observer(() => {
  const { user, appState } = useContext(Context);

  useEffect(() => {
    if (user.isAuth) user.logOut();
    appState.hideAll();
  }, [appState, user]);

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const navigate = useNavigate();

  const loginOrRegister = useCallback(async () => {
    const res = await user.loginOrRegister(isLogin, login, password);

    if (res) navigate(MAINPAGE_ROUTE);
  }, [navigate, user, login, password, isLogin]);

  return (
    <div className={classes.authContainer}>
      <div className={classes.flexItem}>
        <h1>{isLogin ? "Логин" : "Регистрация"}</h1>
      </div>
      <div className={classes.flexItem}>
        <StyledInput
          autoFocus={true}
          className={classes.authInput}
          label={"Логин"}
          setValue={setLogin}
          type="login"
        />
      </div>
      <div className={classes.flexItem}>
        <StyledInput
          className={classes.authInput}
          label={"Пароль"}
          setValue={setPassword}
          type="password"
        />
      </div>
      <div className={classes.flexItem}>
        <div className={classes.footer}>
          <AppButton onClick={loginOrRegister}>
            <h5>{isLogin ? "Войти" : "Зарегистрировать"}</h5>
          </AppButton>
          <div className={classes.links}>
            <h5>{isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}</h5>
            <h5>
              {isLogin ? (
                <div
                  className={classesCommon.navLink}
                  style={{ marginLeft: "5px" }}
                  onClick={() => navigate(REGISTER_ROUTE)}
                >
                  Зарегистрировать
                </div>
              ) : (
                <div
                  className={classesCommon.navLink}
                  style={{ marginLeft: "5px" }}
                  onClick={() => navigate(LOGIN_ROUTE)}
                >
                  Войти
                </div>
              )}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Auth;
