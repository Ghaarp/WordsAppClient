import React from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../HidableGroup";
import TranslationTreeComponent from "../TranslationTreeComponent";

const IndexableItemsContainer = ({ data }) => {
  return (
    <div>
      {data.type ? (
        <HidableGroup groupName={data.type}>
          <div className={classes.items}>
            {data.indexableItems.map((element, index) => (
              <TranslationTreeComponent data={element} innerIndex={++index} />
            ))}
          </div>
        </HidableGroup>
      ) : (
        <div className={classes.items}>
          {data.indexableItems.map((element, index) => (
            <TranslationTreeComponent data={element} innerIndex={++index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexableItemsContainer;
