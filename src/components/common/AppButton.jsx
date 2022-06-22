import React from "react";
import { Button } from "react-bootstrap";
import { getClass } from "../../utils/cssClasses";
import classes from "../styles/appButton.module.css";

const AppButton = ({ className, children, onClick }) => {
  return (
    <button
      className={getClass([className, classes.appButton])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AppButton;
