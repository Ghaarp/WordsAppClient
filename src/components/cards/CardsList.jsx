import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./styles/cards.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import LoadingComponent from "../common/LoadingComponent";
import { toJS } from "mobx";
import Card from "./Card";
import CheckBox from "../common/CheckBox";
import { useCards } from "../../hooks/useCards";
import { useObserver } from "../../hooks/useObserver";

const CardsList = observer(() => {
  const { cards, user } = useContext(Context);
  const { isLoading, pagesTotal, page } = cards;
  const [isOwnerOnly, setIsOwnerOnly] = useState(false);

  const observerComponent = useRef();
  useObserver(observerComponent, isLoading, pagesTotal, page, () => {
    if (page < pagesTotal) cards.loadNextPage();
  });

  const filteredCards = useCards(toJS(cards.list), {
    userId: isOwnerOnly ? user.id : undefined,
  });

  const updateIsOwnerOnly = (value) => {
    setIsOwnerOnly(value);
  };

  return (
    <div className={classes.cardsListComponent}>
      <div className={classes.filtersContainer}>
        <CheckBox
          value={isOwnerOnly}
          switchFunction={updateIsOwnerOnly}
          title={"Только собственные карточки"}
        />
      </div>
      <div className={classes.cardsListContainer}>
        <div className={classes.cardsList}>
          {filteredCards
            ? filteredCards.map((item, index) => {
                return <Card key={index} data={item} />;
              })
            : null}
          {isLoading ? <LoadingComponent /> : null}
          <div className={classes.observer} ref={observerComponent} />
        </div>
      </div>
    </div>
  );
});

export default CardsList;
