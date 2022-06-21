import React from "react";
import SideBar from "./sideBar/SideBar";
import { getClass } from "../utils/cssClasses";
import classes from "../styles/app.module.css";
import MainFrame from "./MainFrame";
import Friends from "./friends/Friends";

const BodyContainer = ({ className, children }) => {
  return (
    <div className={className}>
      <SideBar className={getClass([classes.frame, classes.side])}>
        side
      </SideBar>
      <MainFrame className={getClass([classes.frame, classes.main])}>
        main
      </MainFrame>
      <Friends className={getClass([classes.frame, classes.friends])}>
        friends
      </Friends>
    </div>
  );
};

export default BodyContainer;
