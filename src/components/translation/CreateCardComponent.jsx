import React from "react";
import Search from "./Search";
import classes from "./styles/createCard.module.css";
import ResultFrame from "./ResultFrame";
import { observer } from "mobx-react-lite";

const CreateCardComponent = observer(() => {
  return (
    <div className={classes.createCardContainer}>
      <Search />
      <ResultFrame />
    </div>
  );
});

export default CreateCardComponent;
