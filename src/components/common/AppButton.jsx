import React from "react";
import { getClass } from "../../utils/cssClasses";
import classes from "./styles/common.module.css";

const AppButton = ({ className, children, onClick, disabled }) => {
  return (
    <button
      className={getClass([
        className,
        classes.appButton,
        disabled && classes.disabled,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default AppButton;
