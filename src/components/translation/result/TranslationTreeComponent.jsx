import React from "react";
import classes from "./styles/tree.module.css";
import { getClass } from "../../../utils/cssClasses";

const TranslationTreeComponent = ({ data, innerIndex }) => {
  return (
    <div
      className={getClass([
        classes.TranslationTreeContainer,
        innerIndex ? classes.borderedContainer : "",
      ])}
    >
      {innerIndex ? (
        <div className={classes.index}>
          <div className={classes.number}> {innerIndex}</div>
        </div>
      ) : null}
      <div className={getClass([classes.TranslationTreeComponent])}>
        {data && data.type ? (
          <div className={classes.textType}>{data.type}</div>
        ) : null}
        {data && data.tags ? (
          <div className={classes.tags}>
            {data.tags.map((element) => (
              <TranslationTreeComponent data={element} />
            ))}
          </div>
        ) : null}
        {data && data.tag ? (
          <div className={classes.tag}>{data.tag}</div>
        ) : null}
        {data && data.meaning ? (
          <div className={classes.meaning}>
            <div className={classes.textValue}>{data.meaning}</div>
            {data.expression ? (
              <div className={classes.textExpression}>"{data.expression}"</div>
            ) : null}
          </div>
        ) : null}
        {data && data.value && data.rarity ? (
          <div className={classes.textValue}>
            {data.value} - rarity: {data.rarity}
          </div>
        ) : null}

        {data && data.example ? (
          <div>
            <h5>"{data.example}"</h5>{" "}
            {data.source ? <h5> - {data.source}</h5> : null}{" "}
          </div>
        ) : null}
        {data && data.synonym ? (
          <div className={classes.synonym}>{data.synonym}</div>
        ) : null}

        {data && data.synonymGroups ? (
          <div className={classes.synonymGroups}>
            <div className={classes.synonymHeader}>Синонимы</div>
            {data.synonymGroups.map((element) => (
              <TranslationTreeComponent data={element} />
            ))}
          </div>
        ) : null}

        {data && data.items ? (
          <div className={classes.items}>
            {data.items.map((element, index) => (
              <TranslationTreeComponent data={element} />
            ))}
          </div>
        ) : null}
        {data && data.indexableItems ? (
          <div className={classes.items}>
            {data.indexableItems.map((element, index) => (
              <TranslationTreeComponent data={element} innerIndex={++index} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TranslationTreeComponent;
