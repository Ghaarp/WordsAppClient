import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import classes from "./styles/auth.module.css";
import { FormControl } from "react-bootstrap";
import AppButton from "../components/common/AppButton";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTER_ROUTE } from "../utils/consts";
import { errorHandle } from "../utils/errorHandler";
import { loginOnServer, registerOnServer } from "../http/user";
import StyledInput from "../components/common/StyledInput";

const Auth = observer(() => {
  const { user } = useContext(Context);
  if (user.isAuth) user.logOut();

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const navigate = useNavigate();

  const loginOrRegister = async () => {
    try {
      const res = isLogin
        ? await loginOnServer(login, password)
        : await registerOnServer(login, password);
      if (
        errorHandle(
          res,
          () => {},
          () => {}
        )
      )
        return;

      const token = res.response.data;
      user.updateToken(token);
      navigate(MAINPAGE_ROUTE);
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <div className={classes.authContainer}>
      <div className={classes.flexItem}>
        <h1>{isLogin ? "Логин" : "Регистрация"}</h1>
      </div>
      <div className={classes.flexItem}>
        <StyledInput
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
            <h5>{isLogin ? "Нет аккаунта? " : "Уже есть аккаунт?"}</h5>
            <h5>
              {isLogin ? (
                <a href="" onClick={() => navigate(REGISTER_ROUTE)}>
                  Зарегистрировать
                </a>
              ) : (
                <a href="" onClick={() => navigate(LOGIN_ROUTE)}>
                  Войти
                </a>
              )}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Auth;
