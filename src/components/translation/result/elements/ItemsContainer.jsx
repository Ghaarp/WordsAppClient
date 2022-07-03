import React from "react";
import classes from "./styles/elements.module.css";
import TranslationTreeComponent from "../TranslationTreeComponent";

const ItemsContainer = ({ data }) => {
  return (
    <div className={classes.items}>
      {data.items.map((element, index) => (
        <TranslationTreeComponent data={element} />
      ))}
    </div>
  );
};

export default ItemsContainer;
