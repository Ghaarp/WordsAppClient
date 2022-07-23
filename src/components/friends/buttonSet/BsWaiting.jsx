import React from "react";
import classes from "../styles/friends.module.css";
import CardButton from "../CardButton";

const BsWaiting = ({ accept, decline }) => {
  return (
    <div className={classes.headerButtons}>
      <CardButton className={classes.buttonAccept} onClick={accept} />
      <CardButton className={classes.buttonCancel} onClick={decline} />
    </div>
  );
};

export default BsWaiting;
