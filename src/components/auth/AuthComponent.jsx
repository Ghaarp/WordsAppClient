import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./styles/auth.module.css";
import classesCommon from "../common/styles/common.module.css";
import {
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTER_ROUTE,
} from "../../utils/consts";
import StyledInput from "../common/StyledInput";
import AppButton from "../common/AppButton";
import { Context } from "../../index";

const AuthComponent = observer(() => {
  const { user, appState } = useContext(Context);

  useEffect(() => {
    if (user.isAuth) user.logOut();
    appState.hideAll();
  }, [appState, user]);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const navigate = useNavigate();

  const loginOrRegister = async () => {
    const res = await user.loginOrRegister(isLogin, login, password);

    if (res) navigate(MAINPAGE_ROUTE);
  };

  const checkLoginSpelling = (e) => {
    const maxLength = 15;
    let value = e.target.value.replace(/[^\w]/g, "");

    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    if (value !== e.target.value) {
      setLoginError(
        "Логин может состоять не более чем из 15 латинских символов или цифр"
      );
    } else {
      setLoginError("");
    }
    setLogin(value);
  };

  const checkPasswordSpelling = (e) => {
    const maxLength = 16;
    let value = e.target.value;
    if (value.length > maxLength) {
      e.target.value = value.slice(0, maxLength);
      setPasswordError("Не более 16 символов");
    } else {
      setPasswordError("");
    }

    setPassword(e.target.value);
  };

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
          type="login"
          value={login}
          onChange={checkLoginSpelling}
        />
        {loginError && <div className={classes.errorText}>{loginError}</div>}
      </div>

      <div className={classes.flexItem}>
        <StyledInput
          className={classes.authInput}
          label={"Пароль"}
          type="password"
          value={password}
          onChange={checkPasswordSpelling}
        />
        {passwordError && (
          <div className={classes.errorText}>{passwordError}</div>
        )}
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

export default AuthComponent;
