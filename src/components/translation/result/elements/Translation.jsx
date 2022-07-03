import React from "react";
import classes from "./styles/elements.module.css";

const Translation = ({ data }) => {
  return (
    <div className={classes.textTranslation}>
      {data.value} - rarity: {data.rarity}
    </div>
  );
};

export default Translation;
