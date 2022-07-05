import React from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../HidableGroup";
import TranslationTreeComponent from "../TranslationTreeComponent";

const IndexableItemsContainer = ({ data, isChecked, setIsChecked }) => {
  return (
    <div>
      {data.type ? (
        <HidableGroup
          groupName={data.type}
          selectable={true}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        >
          <div className={classes.items}>
            {data.indexableItems.map((element, index) => (
              <TranslationTreeComponent
                key={element.id}
                data={element}
                innerIndex={++index}
                selectable={true}
              />
            ))}
          </div>
        </HidableGroup>
      ) : (
        <div className={classes.items}>
          {data.indexableItems.map((element, index) => (
            <TranslationTreeComponent
              key={element.id}
              data={element}
              innerIndex={++index}
              selectable={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexableItemsContainer;
