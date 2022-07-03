import React from "react";
import classes from "./styles/elements.module.css";

const Tag = ({ data }) => {
  return <div className={classes.tag}>{data.tag}</div>;
};

export default Tag;
