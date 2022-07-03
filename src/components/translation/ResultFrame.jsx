import React, { useContext } from "react";
import classes from "./styles/result.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { toJS } from "mobx";
import TranslationTreeComponent from "./result/TranslationTreeComponent";
import HidableGroup from "./result/HidableGroup";
import ImageBlock from "./result/ImageBlock";

const ResultFrame = observer(() => {
  const { translationResult } = useContext(Context);
  const { isLoading } = translationResult;

  const translation = toJS(translationResult.translation);

  const { definitions, examples, translations } =
    translation && translation.data && translation.data.additionalData
      ? translation.data.additionalData
      : {};

  const { imageData } = translation ? translation : {};

  return (
    <div className={classes.resultContainer}>
      {isLoading ? (
        <div className={classes.loadingContainer}>
          <div className={classes.loading} />
        </div>
      ) : (
        <div>
          {translation && translation.data && translation.data.translation ? (
            <div className={classes.translationBlock}>
              <div className={classes.translation}>
                {translation.data.translation}
              </div>
            </div>
          ) : null}
          {imageData ? (
            <HidableGroup groupName={"Изображения"}>
              <ImageBlock data={imageData} />
            </HidableGroup>
          ) : null}
          {translations ? (
            <HidableGroup groupName={"Варианты перевода"}>
              <TranslationTreeComponent data={translations} />
            </HidableGroup>
          ) : null}
          {definitions ? (
            <HidableGroup groupName={"Значения"}>
              <TranslationTreeComponent data={definitions} />
            </HidableGroup>
          ) : null}
          {examples ? (
            <HidableGroup groupName={"Примеры"}>
              <TranslationTreeComponent data={examples} />
            </HidableGroup>
          ) : null}
        </div>
      )}
    </div>
  );
});

export default ResultFrame;
