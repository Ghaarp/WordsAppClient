import React from "react";
import classes from "./styles/friends.module.css";
import { getClass } from "../../utils/cssClasses";

const CardButton = ({ className, onClick }) => {
  return (
    <div
      className={getClass([className, classes.cardButton])}
      onClick={onClick}
    />
  );
};

export default CardButton;
