import React, { useContext } from "react";
import { Context } from "../index";
import MainPageAuth from "../components/mainPage/MainPageAuth";
import MainPageNotAuth from "../components/mainPage/MainPageNotAuth";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
  const { user } = useContext(Context);
  const isAuth = user.isAuth;
  return <div>{isAuth ? <MainPageAuth /> : <MainPageNotAuth />}</div>;
});

export default Main;
