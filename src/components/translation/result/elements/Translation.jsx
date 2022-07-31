import React from "react";
import classes from "./styles/elements.module.css";
import RarityComponent from "./rarityComponent/RarityComponent";

const Translation = ({ data }) => {
  return (
    <div className={classes.textTranslation}>
      {data.value} <RarityComponent value={data.rarity} />
    </div>
  );
};

export default Translation;
