/* eslint-disable no-useless-escape */

import React, { useContext } from "react";
import classes from "./styles/elements.module.css";
import { Context } from "../../../../index";

const Fix = ({ data }) => {
  const { translationResult } = useContext(Context);
  const fix = data.replace(/[\[\]]/g, '');

  const fixResult = async () => {
    if (!fix) return;
    translationResult.translateExpression(fix);
  };

  return (
    <div className={classes.fix} onClick={fixResult}>
      <div className={classes.fixHeader}>{"Возможно, вы имели в виду: "}</div>
      <div className={classes.tag}>{fix}</div>
    </div>
  );
};

export default Fix;
