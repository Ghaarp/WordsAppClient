import React, { useContext } from "react";
import classes from "./styles/result.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { toJS } from "mobx";
import TranslationTreeComponent from "./result/TranslationTreeComponent";
import AppButton from "../common/AppButton";
import { useNavigate } from "react-router-dom";
import { MAINPAGE_ROUTE } from "../../utils/consts";
import LoadingComponent from "../common/LoadingComponent";
import Fix from "./result/elements/Fix";

const ResultFrame = observer(() => {
  const { translationResult } = useContext(Context);
  const { isLoading, isSelectionEnabled } = translationResult;
  const translation = toJS(translationResult.translation);

  const navigate = useNavigate();

  const additionalData =
    translation?.data?.additionalData && translation.data.additionalData;

  const saveCard = async () => {
    const res = await translationResult.createNewCard();
    if (!res.isError) navigate(MAINPAGE_ROUTE);
  };

  return (
    <div className={classes.resultContainer}>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          {translation?.data?.fix && <Fix data={translation.data.fix} />}
          {translation?.data?.translation && translation?.data?.original && (
            <div className={classes.translationBlock}>
              <div className={classes.original}>
                {`${translation.data.original}:`}
              </div>
              <div className={classes.translation}>
                {translation.data.translation}
              </div>
            </div>
          )}

          {additionalData && <TranslationTreeComponent data={additionalData} />}

          {translation && isSelectionEnabled && (
            <div className={classes.translationBlock}>
              {<AppButton onClick={saveCard}>Сохранить карточку</AppButton>}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default ResultFrame;
