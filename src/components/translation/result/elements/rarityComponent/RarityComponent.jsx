import React, { useEffect, useState } from "react";
import classes from "./styles/rarity.module.css";
import RarityCell from "./RarityCell";

const RarityComponent = ({ value }) => {
  const [cells, setCells] = useState([]);
  const [tip, setTip] = useState();

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 4 - value; i++) {
      arr.push(undefined);
    }

    setCells(arr);
  }, [value]);

  useEffect(() => {
    let tip = "";
    switch (value) {
      case 1:
        tip = "Часто";
        break;

      case 2:
        tip = "Редко";
        break;

      case 3:
        tip = "Очень редко";
        break;

      default:
        tip = "";
        break;
    }

    setTip(tip);
  });

  return (
    <div className={classes.rarityContainer}>
      <div className={classes.rarityComponent}>
        {cells.map((item, index) => {
          return <RarityCell key={index} />;
        })}
        <div className={classes.tip}>{tip}</div>
      </div>
    </div>
  );
};

export default RarityComponent;
