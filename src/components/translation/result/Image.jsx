import React from "react";
import classes from "./styles/imageBlock.module.css";
import commonClasses from "../../../styles/common.module.css";
import { getClass } from "../../../utils/cssClasses";

const Image = ({ imageData, showImage }) => {
  const showFullscreenImage = () => {
    if (imageData && imageData.url) showImage(imageData.url);
  };

  return (
    <div>
      {imageData && imageData.thumbnail && imageData.thumbnail.url ? (
        <img
          src={imageData.thumbnail.url}
          className={getClass([classes.image, commonClasses.unselectable])}
          height={imageData.thumbnail.height}
          width={imageData.thumbnail.width}
          onClick={showFullscreenImage}
        />
      ) : null}
    </div>
  );
};

export default Image;
