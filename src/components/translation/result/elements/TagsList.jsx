import React from "react";
import classes from "./styles/elements.module.css";
import TranslationTreeComponent from "../TranslationTreeComponent";

const TagsList = ({ data }) => {
  return (
    <div className={classes.tags}>
      {data.tags.map((element) => (
        <TranslationTreeComponent key={element.id} data={element} />
      ))}
    </div>
  );
};

export default TagsList;
