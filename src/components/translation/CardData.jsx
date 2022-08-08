import React from "react";
import Search from "./Search";
import classes from "./styles/createCard.module.css";
import ResultFrame from "./ResultFrame";
import { observer } from "mobx-react-lite";

const CardData = observer(({ showSearch }) => {
  return (
    <div className={classes.createCardContainer}>
      {showSearch && <Search />}
      <ResultFrame />
    </div>
  );
});

export default CardData;
