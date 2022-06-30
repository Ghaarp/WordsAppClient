import React, { useContext, useState } from "react";
import { Context } from "../../index";
import classes from "./styles/createCard.module.css";
import AppButton from "../common/AppButton";
import { fetchTranslation } from "../../http/card";
import { errorHandle } from "../../utils/errorHandler";
import { getClass } from "../../utils/cssClasses";

const Search = () => {
  const [expression, setExpression] = useState();
  const { translationResult } = useContext(Context);
  const [isMinimized, setIsMinimized] = useState(false);
  const [restart, setRestart] = useState(false);

  const { user } = useContext(Context);
  const { isAuth } = user;

  const fetchTranslationResult = async () => {
    translationResult.setTranslation(undefined);
    translationResult.setIsLoading(true);
    setIsMinimized(true);

    const res = await fetchTranslation(expression);
    if (
      errorHandle(
        res,
        () => {},
        () => {}
      )
    ) {
      translationResult.setIsLoading(false);
      return;
    }

    const translationData = res.response.data;
    translationResult.setTranslation(translationData);
  };

  const minmax = () => {
    setIsMinimized(!isMinimized);
    setRestart(true);
  };

  return (
    <div className={classes.searchContainer}>
      <div>
        <input
          type="text"
          required
          className={classes.searchInput}
          onChange={(e) => setExpression(e.target.value)}
        />

        <div className={classes.labelBox}>
          <label
            className={getClass([classes.searchLabel])}
            style={{
              animationDirection: isMinimized ? "normal" : "reverse",
              animationIterationCount: "none",
            }}
          >
            Введите выражение
          </label>
        </div>
      </div>

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
