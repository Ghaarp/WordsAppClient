import React from "react";
import classes from "./styles/button.module.css";
import { getClass } from "../../utils/cssClasses";

const MainPageButton = ({
  children,
  onClick,
  imgSource,
  className,
  disabled,
}) => {
  return (
    <button
      className={getClass([
        className,
        classes.mainPageButton,
        disabled && classes.disabled,
      ])}
      onClick={onClick}
    >
      <img src={imgSource} />
      {children}
    </button>
  );
};

export default MainPageButton;
