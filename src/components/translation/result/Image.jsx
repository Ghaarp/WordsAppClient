import React, { useContext, useState } from "react";
import classes from "./styles/imageBlock.module.css";
import commonClasses from "../../../styles/common.module.css";
import { getClass } from "../../../utils/cssClasses";
import CheckBox from "./elements/CheckBox";
import loup from "../../../assets/button/loup48.png";
import { Context } from "../../../index";

const Image = ({ data, showImage }) => {
  const [isMainImage, setIsMainImage] = useState(data.isMainImage);

  const { translationResult } = useContext(Context);
  const { id, isChecked } = data;

  const updateIsChecked = (value) => {
    if (!translationResult) return;
    translationResult.updateIsChecked(id, value);

    if (!value && isMainImage) {
      updateIsMainImage();
    }
  };

  const updateIsMainImage = () => {
    const newValue = !isMainImage;
    setIsMainImage(newValue);

    if (newValue && !isChecked) {
      updateIsChecked(true);
    }
  };

  const showFullscreenImage = () => {
    if (data && data.url) showImage(data.url);
  };

  return (
    <div>
      {data && data.thumbnail && data.thumbnail.url ? (
        <div
          className={getClass([
            classes.imageContainer,
            isChecked ? classes.checked : "",
          ])}
        >
          <CheckBox
            className={classes.imageFlag}
            value={isChecked}
            switchFunction={updateIsChecked}
          />
          <img
            src={data.thumbnail.url}
            className={getClass([classes.image, commonClasses.unselectable])}
            height={data.thumbnail.height}
            width={data.thumbnail.width}
            onClick={showFullscreenImage}
          />
          <img src={loup} className={classes.increase} />
          <div
            className={classes.setAsMainButton}
            onClick={updateIsMainImage}
            style={{ width: data.thumbnail.width }}
          >
            {isMainImage
              ? "Основное изображение"
              : "Установить как основное изображение"}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Image;
