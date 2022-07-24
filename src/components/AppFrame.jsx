import React from "react";
import { getClass } from "../utils/cssClasses";
import classes from "./styles/app.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BodyContainer from "./BodyContainer";

const AppFrame = ({ className }) => {
  return (
    <div className={className}>
      <NavBar />
      <BodyContainer className={getClass([classes.body])} />
      <Footer />
    </div>
  );
};

export default AppFrame;
