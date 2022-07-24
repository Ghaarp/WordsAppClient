import React from "react";
import SideBar from "./sideBar/SideBar";
import { getClass } from "../utils/cssClasses";
import classes from "./styles/app.module.css";
import MainFrame from "./MainFrame";
import Friends from "./friends/Friends";

const BodyContainer = ({ className }) => {
  return (
    <div className={className}>
      <SideBar />
      <MainFrame className={getClass([classes.main])} />
      <Friends />
    </div>
  );
};

export default BodyContainer;
