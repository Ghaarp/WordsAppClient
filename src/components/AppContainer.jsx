import React from "react";
import { getClass } from "../utils/cssClasses";
import classes from "../styles/app.module.css";
import { BrowserRouter } from "react-router-dom";
import AppFrame from "./AppFrame";

const AppContainer = ({ className, children }) => {
  return (
    <div className={className}>
      <AppFrame className={getClass([classes.frame, classes.innerContainer])} />
    </div>
  );
};

export default AppContainer;
