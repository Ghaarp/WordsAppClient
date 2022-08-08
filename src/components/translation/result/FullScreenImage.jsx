import React from "react";
import classes from "./styles/imageBlock.module.css";
import commonClasses from "../../../styles/common.module.css";
import { getClass } from "../../../utils/cssClasses";

const FullScreenImage = ({ imageUrl, hide }) => {
  return (
    <div
      className={getClass([
        classes.fullScreenImage,
        commonClasses.unselectable,
      ])}
      onClick={hide}
    >
      <img src={imageUrl} />
    </div>
  );
};

export default FullScreenImage;
