import React from "react";
import classes from "../styles/checkbox.module.css";
import { getClass } from "../../../../utils/cssClasses";

const CheckBox = ({ value, switchFunction }) => {
  console.log(value);

  const switchValue = () => {
    switchFunction(!value);
  };

  return (
    <div
      className={getClass([classes.checkbox, value ? classes.checked : ""])}
      onClick={switchValue}
    />
  );
};

export default CheckBox;
