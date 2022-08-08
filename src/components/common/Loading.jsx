import React from "react";
import classes from "../common/styles/common.module.css";

const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
      <div className={classes.loading} />
    </div>
  );
};

export default Loading;
