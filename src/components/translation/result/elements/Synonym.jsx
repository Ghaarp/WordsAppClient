import React from "react";
import classes from "./styles/elements.module.css";

const Synonym = ({ data }) => {
  return <div className={classes.synonym}>{data.synonym}</div>;
};

export default Synonym;
