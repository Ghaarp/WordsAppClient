import React from "react";
import { Button } from "react-bootstrap";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/common.module.css";

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
