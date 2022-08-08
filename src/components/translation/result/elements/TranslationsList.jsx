import React from "react";
import classes from "./styles/elements.module.css";
import TranslationTreeElement from "../TranslationTreeElement";

const TranslationsList = ({ data }) => {
  return (
    <div className={classes.translations}>
      <TranslationTreeElement data={data.translations} />
    </div>
  );
};

export default TranslationsList;
