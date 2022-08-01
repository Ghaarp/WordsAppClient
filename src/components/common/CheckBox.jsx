import React from "react";
import classes from "./styles/common.module.css";
import { getClass } from "../../utils/cssClasses";

const CheckBox = ({ value, switchFunction, className, title }) => {
  const switchValue = () => {
    switchFunction(!value);
  };

  return (
    <div className={classes.checkBoxContainer}>
      {title && <div className={classes.title}>{title}</div>}
      <div
        className={getClass([
          classes.checkbox,
          className,
          value && classes.checked,
        ])}
        onClick={switchValue}
      />
    </div>
  );
};

export default CheckBox;
