import React, { useCallback, useContext, useMemo, useState } from "react";
import classes from "../cards/styles/cards.module.css";
import lock_body from "../../assets/common/lock_body.png";
import lock_shackle from "../../assets/common/lock_head.png";
import { getClass } from "../../utils/cssClasses";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { CARD_ROUTE } from "../../utils/consts";

const Card = ({ data }) => {
  const { translationResult } = useContext(Context);

  const [isImageHidden, setIsImageHidden] = useState(true);
  const [isTranslationHidden, setIsTranslationHidden] = useState(true);

  const navigate = useNavigate();

  const imgData = JSON.parse(data?.image);

  const showTranslation = useCallback(() => {
    setIsTranslationHidden(false);
  }, []);

  const showImage = useCallback(() => {
    setIsImageHidden(false);
  }, []);

  const goToCardPage = useCallback(() => {
    if (!translationResult || !data?.id) return;
    translationResult.fetchCardData(data.id);
    navigate(CARD_ROUTE);
  }, [data]);

  return (
    <div className={classes.card}>
      {imgData ? (
        <div className={classes.imgContainer}>
          <div
            className={getClass([
              classes.innerImgContainer,
              isImageHidden ? classes.imgHidden : "",
            ])}
            onClick={showImage}
          >
            {isImageHidden ? (
              <div className={classes.lock}>
                <img
                  className={classes.lockShackle}
                  src={lock_shackle}
                  width="64px"
                  height="64px"
                />
                <img
                  className={classes.lockBody}
                  src={lock_body}
                  width="64px"
                  height="64px"
                />
              </div>
            ) : (
              <img className={classes.image} src={imgData.url} />
            )}
          </div>
        </div>
      ) : null}
      <div className={classes.dataContainer}>
        <div className={classes.expression}>{data.expression}</div>
        {isTranslationHidden ? (
          <div className={classes.translationHidden} onClick={showTranslation}>
            ???????????????? ??????????????
          </div>
        ) : (
          <div className={classes.translation}>{data.translation}</div>
        )}
      </div>
      <div className={classes.fullDataButton} onClick={goToCardPage}>
        i
      </div>
    </div>
  );
};

export default Card;
