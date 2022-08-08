import React from "react";
import classes from "./styles/elements.module.css";
import Rarity from "./Rarity";

const Translation = ({ data }) => {
  return (
    <div className={classes.textTranslation}>
      {data.value} <Rarity value={data.rarity} />
    </div>
  );
};

export default Translation;
