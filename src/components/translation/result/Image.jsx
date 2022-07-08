import React, { useContext, useState } from "react";
import classes from "./styles/imageBlock.module.css";
import commonClasses from "../../../styles/common.module.css";
import { getClass } from "../../../utils/cssClasses";
import CheckBox from "./elements/CheckBox";
import loup from "../../../assets/button/loup48.png";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";

const Image = ({ data, showImage }) => {
  const { translationResult } = useContext(Context);
  const { id, isChecked, isMainElement } = data;

  const updateIsChecked = (value) => {
    if (!translationResult) return;
    translationResult.updateIsChecked(id, value);

    if (!value && isMainElement) {
      updateIsMainElement();
    }
  };

  const updateIsMainElement = () => {
    const newValue = !isMainElement;
    if (!translationResult) return;
    translationResult.updateIsMainElement(id, newValue);

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
            onClick={updateIsMainElement}
            style={{ width: data.thumbnail.width }}
          >
            {isMainElement
              ? "Основное изображение"
              : "Установить как основное изображение"}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Image;
