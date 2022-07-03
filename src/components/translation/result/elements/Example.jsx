import React from "react";
import classes from "./styles/elements.module.css";

const Example = ({ data }) => {
  return (
    <div>
      <div className={classes.textExpression}>
        "
        <div
          className={classes.textExpression}
          dangerouslySetInnerHTML={{ __html: data.example }}
        />
        "
      </div>
      {data.source ? (
        <div className={classes.textValue}> - {data.source}</div>
      ) : null}{" "}
    </div>
  );
};

export default Example;
