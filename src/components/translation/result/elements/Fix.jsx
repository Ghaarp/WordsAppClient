import React, { useCallback, useContext } from "react";
import classes from "./styles/elements.module.css";
import { Context } from "../../../../index";

const Fix = ({ data }) => {
  const { translationResult } = useContext(Context);
  const fix = data.replace(/[\[\]]/g, "");

  const fixResult = useCallback(async () => {
    if (!fix) return;
    translationResult.translateExpression(fix);
  }, [fix]);

  return (
    <div className={classes.fix} onClick={fixResult}>
      <div className={classes.fixHeader}>{"Возможно, вы имели в виду: "}</div>
      <div className={classes.tag}>{fix}</div>
    </div>
  );
};

export default Fix;
