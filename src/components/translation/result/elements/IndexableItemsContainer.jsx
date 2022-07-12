import React, { useContext } from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../HidableGroup";
import TranslationTreeComponent from "../TranslationTreeComponent";
import { Context } from "../../../../index";

const IndexableItemsContainer = ({ data, isChecked, setIsChecked }) => {
  const { translationResult } = useContext(Context);
  const { isSelectionEnabled } = translationResult;

  return (
    <div>
      {data.type ? (
        <HidableGroup
          groupName={data.type}
          selectable={isSelectionEnabled}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        >
          <div className={classes.items}>
            {data.indexableItems.map((element, index) => (
              <TranslationTreeComponent
                key={element.id}
                data={element}
                innerIndex={++index}
                selectable={isSelectionEnabled}
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
              selectable={isSelectionEnabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexableItemsContainer;
