import React from "react";
import { Button } from "react-bootstrap";
import classes from "./styles/button.module.css";

const MainPageButton = ({ children, onClick, imgSource }) => {
  return (
    <button className={classes.mainPageButton} onClick={onClick}>
      <img src={imgSource} />
      {children}
    </button>
  );
};

export default MainPageButton;
