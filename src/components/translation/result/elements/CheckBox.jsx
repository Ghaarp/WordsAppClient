import React from "react";
import classes from "./styles/elements.module.css";
import { getClass } from "../../../../utils/cssClasses";

const CheckBox = ({ value, switchFunction, className }) => {
  const switchValue = () => {
    switchFunction(!value);
  };

  return (
    <div
      className={getClass([
        classes.checkbox,
        className,
        value ? classes.checked : "",
      ])}
      onClick={switchValue}
    />
  );
};

export default CheckBox;
