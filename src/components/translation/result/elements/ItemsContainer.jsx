import React from "react";
import classes from "./styles/elements.module.css";
import TranslationTreeElement from "../TranslationTreeElement";

const ItemsContainer = ({ data }) => {
  return (
    <div className={classes.items}>
      {data.items.map((element) => (
        <TranslationTreeElement key={element.id} data={element} />
      ))}
    </div>
  );
};

export default ItemsContainer;
