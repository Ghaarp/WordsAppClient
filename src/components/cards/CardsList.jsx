import React, { useContext, useEffect } from "react";
import classes from "./styles/cards.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import LoadingComponent from "../common/LoadingComponent";
import { toJS } from "mobx";
import Card from "./Card";

const CardsList = observer(() => {
  const { cards } = useContext(Context);
  const { isLoading } = cards;

  const cardsData = toJS(cards.list);

  useEffect(() => {
    if (!cards.isLoaded && !cards.isLoading) {
      cards.updateList();
    }
  });

  return (
    <div className={classes.cardsListContainer}>
      {isLoading ? <LoadingComponent /> : null}
      <div className={classes.cardsList}>
        {cardsData
          ? cardsData.map((item) => {
              return <Card data={item} />;
            })
          : null}
      </div>
    </div>
  );
});

export default CardsList;
