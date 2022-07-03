import React from "react";
import classes from "./styles/elements.module.css";
import TranslationTreeComponent from "../TranslationTreeComponent";

const TranslationsList = ({ data }) => {
  return (
    <div className={classes.translations}>
      <TranslationTreeComponent data={data.translations} />
    </div>
  );
};

export default TranslationsList;
