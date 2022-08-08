import React from "react";
import classes from "./styles/elements.module.css";
import TranslationTreeElement from "../TranslationTreeElement";

const TagsList = ({ data }) => {
  return (
    <div className={classes.tags}>
      {data.tags.map((element) => (
        <TranslationTreeElement key={element.id} data={element} />
      ))}
    </div>
  );
};

export default TagsList;
