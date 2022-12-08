import React, { useContext } from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../../../common/HidableGroup";
import TranslationTreeComponent from "../TranslationTreeComponent";
import { Context } from "../../../../index";
import { partsOfSpeech } from "../../../../utils/partsOfSpeech";

const IndexableItemsContainer = ({ data, isChecked, setIsChecked }) => {
  const { translationResult } = useContext(Context);
  const { isSelectionEnabled } = translationResult;

  return (
    <div>
      {data.type ? (
        <HidableGroup
          groupName={partsOfSpeech[data.type] || data.type}
          selectable={isSelectionEnabled}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isHiddenByDefault={true}
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
