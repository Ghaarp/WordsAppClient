import React from "react";
import classes from "./styles/elements.module.css";

const Meaning = ({ data }) => {
  return (
    <div className={classes.meaning}>
      <div className={classes.textValue}>{data.meaning}</div>
      {data?.expression && (
        <div className={classes.textExpression}>"{data.expression}"</div>
      )}
    </div>
  );
};

export default Meaning;
