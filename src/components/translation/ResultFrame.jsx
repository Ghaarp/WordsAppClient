import React, { useContext } from "react";
import classes from "./styles/result.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { toJS } from "mobx";
import TranslationTreeComponent from "./result/TranslationTreeComponent";
import AppButton from "../common/AppButton";
import { createCard, fetchTranslation } from "../../http/card";
import { errorHandle } from "../../utils/errorHandler";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../../utils/consts";
import LoadingComponent from "../common/LoadingComponent";
import Fix from "./result/elements/Fix";

const ResultFrame = observer(() => {
  const { translationResult, error } = useContext(Context);
  const { isLoading, isSelectionEnabled } = translationResult;
  const translation = toJS(translationResult.translation);

  console.log(translation);
  const navigate = useNavigate();

  const additionalData =
    translation && translation.data && translation.data.additionalData
      ? translation.data.additionalData
      : undefined;

  const saveCard = async () => {
    const res = await translationResult.createNewCard();
    if (!res.isError) navigate(MAINPAGE_ROUTE);
  };

  const { imageData } = translation ? translation : {};

  return (
    <div className={classes.resultContainer}>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          {translation?.data?.fix ? <Fix data={translation.data.fix} /> : null}
          {translation?.data?.translation && translation?.data?.original ? (
            <div className={classes.translationBlock}>
              <div className={classes.original}>
                {`${translation.data.original}:`}
              </div>
              <div className={classes.translation}>
                {translation.data.translation}
              </div>
            </div>
          ) : null}

          {additionalData ? (
            <TranslationTreeComponent data={additionalData} />
          ) : null}

          {translation && isSelectionEnabled ? (
            <div className={classes.translationBlock}>
              {<AppButton onClick={saveCard}>Сохранить карточку</AppButton>}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
});

export default ResultFrame;
