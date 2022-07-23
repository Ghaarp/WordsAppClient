import React from "react";
import CardButton from "../CardButton";
import classes from "../styles/friends.module.css";

const BsFriends = ({ removeFriend }) => {
  return (
    <div className={classes.headerButtons}>
      <CardButton className={classes.buttonCancel} onClick={removeFriend} />
    </div>
  );
};

export default BsFriends;
