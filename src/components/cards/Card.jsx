import React, { useContext, useState } from "react";
import classes from "../cards/styles/cards.module.css";
import classesCommon from "../../styles/common.module.css";
import lock_body from "../../assets/common/lock_body.png";
import lock_shackle from "../../assets/common/lock_head.png";
import { getClass } from "../../utils/cssClasses";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { CARD_ROUTE } from "../../utils/consts";

const Card = ({ data }) => {
  const { translationResult, cards } = useContext(Context);

  const [isImageHidden, setIsImageHidden] = useState(true);
  const [isTranslationHidden, setIsTranslationHidden] = useState(true);

  const navigate = useNavigate();

  const imgData = JSON.parse(data?.image);

  const showTranslation = () => {
    setIsTranslationHidden(false);
  };

  const showImage = () => {
    setIsImageHidden(false);
  };

  const goToCardPage = () => {
    if (!translationResult || !data?.id) return;
    translationResult.fetchCardData(data.id);
    navigate(CARD_ROUTE);
  };

  const removeCard = () => {
    if (!data) return;

    cards.removeCard(data.id);
  };

  return (
    <div className={classes.card}>
      {imgData && (
        <div className={classes.imgContainer}>
          <div
            className={getClass([
              classes.innerImgContainer,
              isImageHidden && classes.imgHidden,
            ])}
            onClick={showImage}
          >
            {isImageHidden ? (
              <div
                className={getClass([classes.lock, classesCommon.unselectable])}
              >
                <img
                  className={classes.lockShackle}
                  src={lock_shackle}
                  width="64px"
                  height="64px"
                  alt={""}
                />
                <img
                  className={classes.lockBody}
                  src={lock_body}
                  width="64px"
                  height="64px"
                  alt={""}
                />
              </div>
            ) : (
              <img className={classes.image} src={imgData.url} alt={"thumb"} />
            )}
          </div>
        </div>
      )}
      <div className={classes.dataContainer}>
        <div className={classes.expression}>{data.expression}</div>
        {isTranslationHidden ? (
          <div className={classes.translationHidden} onClick={showTranslation}>
            Показать перевод
          </div>
        ) : (
          <div className={classes.translation}>{data.translation}</div>
        )}
      </div>
      <div className={classes.cardButtonPanel}>
        <div className={classes.removeCardButton} onClick={removeCard}>
          X
        </div>
        <div className={classes.infoButton} onClick={goToCardPage}>
          <div className={classes.buttonText}>i</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
