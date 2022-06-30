import React, { useState } from "react";
import Image from "./Image";
import classes from "./styles/imageBlock.module.css";
import FullScreenImage from "./FullScreenImage";

const ImageBlock = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupUrl, setPopupUrl] = useState("");

  const showImage = (url) => {
    setShowPopup(true);
    setPopupUrl(url);
  };

  const hideFullscreenImage = () => {
    setShowPopup(false);
  };

  return (
    <div className={classes.imageBlock}>
      {data
        ? data.map((imageData) => {
            return imageData ? (
              <Image imageData={imageData} showImage={showImage} />
            ) : null;
          })
        : null}
      {showPopup ? (
        <FullScreenImage imageUrl={popupUrl} hide={hideFullscreenImage} />
      ) : null}
    </div>
  );
};

export default ImageBlock;
