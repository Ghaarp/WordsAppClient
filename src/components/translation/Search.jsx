import React, { useCallback, useContext, useState } from "react";
import { Context } from "../../index";
import classes from "./styles/createCard.module.css";
import AppButton from "../common/AppButton";
import { fetchTranslation } from "../../http/card";
import { errorHandle } from "../../utils/errorHandler";
import { getClass } from "../../utils/cssClasses";
import StyledInput from "../common/StyledInput";

const Search = () => {
  const [expression, setExpression] = useState();
  const { translationResult } = useContext(Context);

  const { user } = useContext(Context);

  const fetchTranslationResult = useCallback(async () => {
    if (!expression) return;
    translationResult.translateExpression(expression);
  }, [expression]);

  const onPressEnter = useCallback(
    (event) => {
      if (event.code === "Enter") {
        fetchTranslationResult();
      }
    },
    [expression]
  );

  return (
    <div className={classes.searchContainer}>
      <StyledInput
        label={"Введите выражение"}
        setValue={setExpression}
        onKeyPress={onPressEnter}
        autoFocus={true}
      />

      <AppButton
        className={classes.searchButton}
        onClick={fetchTranslationResult}
      >
        Перевести
      </AppButton>
    </div>
  );
};

export default Search;
