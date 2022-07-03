import React from "react";
import classes from "./styles/elements.module.css";

const ElementIndex = ({ innerIndex }) => {
  return (
    <div className={classes.index}>
      <div className={classes.number}>{innerIndex}</div>
    </div>
  );
};

export default ElementIndex;
