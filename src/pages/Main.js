import React, { useContext, useState } from "react";
import { Context } from "../index";
import MainPageAuth from "../components/mainPage/MainPageAuth";
import MainPageNotAuth from "../components/mainPage/MainPageNotAuth";

const Main = () => {
  const { user } = useContext(Context);
  const isAuth = user.isAuth;
  return <div>{isAuth ? <MainPageAuth /> : <MainPageNotAuth />}</div>;
};

export default Main;
