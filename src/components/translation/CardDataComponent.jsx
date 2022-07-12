import React from "react";
import Search from "./Search";
import classes from "./styles/createCard.module.css";
import ResultFrame from "./ResultFrame";
import { observer } from "mobx-react-lite";

const CardDataComponent = observer(({ showSearch }) => {
  return (
    <div className={classes.createCardContainer}>
      {showSearch ? <Search /> : null}
      <ResultFrame />
    </div>
  );
});

export default CardDataComponent;
