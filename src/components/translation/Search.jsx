import React, { useContext, useState } from "react";
import { Context } from "../../index";
import classes from "./styles/createCard.module.css";
import AppButton from "../common/AppButton";
import { fetchTranslation } from "../../http/card";
import { errorHandle } from "../../utils/errorHandler";

const Search = () => {
  const [expression, setExpression] = useState();
  const { translationResult } = useContext(Context);

  const { user } = useContext(Context);
  const { isAuth } = user;

  const fetchTranslationResult = async () => {
    translationResult.setTranslation(undefined);
    const res = await fetchTranslation(expression);
    if (
      errorHandle(
        res,
        () => {},
        () => {}
      )
    )
      return;

    const translationData = res.response.data;
    translationResult.setTranslation(translationData);
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
          <label className={classes.searchLabel}>Введите выражение</label>
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
