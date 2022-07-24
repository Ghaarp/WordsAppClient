import React from "react";
import classes from "./styles/common.module.css";
import { getClass } from "../../utils/cssClasses";

const StyledInput = ({
  autoFocus,
  className,
  label,
  setValue,
  type,
  onKeyPress,
}) => {
  return (
    <div className={getClass([classes.inputContainer, className])}>
      <input
        autoFocus={autoFocus}
        type={type}
        required
        className={getClass([classes.input])}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onKeyPress}
      />

      <div className={getClass([classes.labelBox])}></div>

      <label className={getClass([classes.label])}>{label}</label>
    </div>
  );
};

export default StyledInput;
