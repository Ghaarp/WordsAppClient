import React from "react";
import { getClass } from "../utils/cssClasses";
import classes from "../styles/app.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BodyContainer from "./BodyContainer";

const AppFrame = ({ className, children }) => {
  return (
    <div className={className}>
      <NavBar className={getClass([classes.frame, classes.nav])}>nav</NavBar>
      <BodyContainer className={getClass([classes.frame, classes.body])} />
      <Footer className={getClass([classes.frame, classes.footer])}>
        footer
      </Footer>
    </div>
  );
};

export default AppFrame;
