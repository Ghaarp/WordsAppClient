import React from "react";
import classes from "../styles/result.module.css";

const TranslationTreeComponent = ({ data }) => {
  return (
    <div className={classes.TranslationTreeComponent}>
      {data && data.type ? <h4>{data.type}</h4> : null}
      {data && data.expression && data.value ? (
        <h5>
          "{data.expression}" - {data.value}
        </h5>
      ) : null}
      {data && data.value && data.rarity ? (
        <h5>
          {data.value} - rarity: {data.rarity}
        </h5>
      ) : null}
      {data && data.tag ? <h5>{data.tag}</h5> : null}
      {data && data.example ? (
        <div>
          <h5>"{data.example}"</h5>{" "}
          {data.source ? <h5> - {data.source}</h5> : null}{" "}
        </div>
      ) : null}
      {data && data.synonym ? <h4>{data.synonym}</h4> : null}
      {data && data.synonymGroups
        ? data.synonymGroups.map((element) => (
            <TranslationTreeComponent data={element} />
          ))
        : null}
      {data && data.tags
        ? data.tags.map((element) => (
            <TranslationTreeComponent data={element} />
          ))
        : null}
      {data && data.items
        ? data.items.map((element) => (
            <TranslationTreeComponent data={element} />
          ))
        : null}
    </div>
  );
};

export default TranslationTreeComponent;
