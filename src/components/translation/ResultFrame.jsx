import React, { useContext } from "react";
import classes from "./styles/result.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { toJS } from "mobx";
import TranslationTreeComponent from "./result/TranslationTreeComponent";
import Definitions from "./result/Definitions";

const ResultFrame = observer(() => {
  const { translationResult } = useContext(Context);

  const translation = toJS(translationResult.translation);
  console.log(translation);

  const { definitions, examples, translations } =
    translation && translation.data && translation.data.additionalData
      ? translation.data.additionalData
      : {};

  return (
    <div className={classes.resultContainer}>
      <TranslationTreeComponent data={definitions} />
      <TranslationTreeComponent data={examples} />
      <TranslationTreeComponent data={translations} />
    </div>
  );
});

export default ResultFrame;
