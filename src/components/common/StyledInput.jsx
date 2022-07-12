import React from "react";
import classes from "./styles/common.module.css";
import { getClass } from "../../utils/cssClasses";

const StyledInput = ({ className, label, setValue, type }) => {
  return (
    <div className={getClass([classes.inputContainer, className])}>
      <input
        type={type}
        required
        className={getClass([classes.input])}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className={getClass([classes.labelBox])}></div>

      <label className={getClass([classes.label])}>{label}</label>
    </div>
  );
};

export default StyledInput;
