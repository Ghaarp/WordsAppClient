import React from "react";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../../utils/consts";
import classes from "./styles/logo.module.css";

const MainPageLogo = () => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.logo}
      onClick={() => {
        navigate(MAINPAGE_ROUTE);
      }}
    >
      <h2>Words app</h2>
    </div>
  );
};

export default MainPageLogo;
