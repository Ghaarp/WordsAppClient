import React, { useContext } from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../../../common/HidableGroup";
import TranslationTreeElement from "../TranslationTreeElement";
import { Context } from "../../../../index";
import { partsOfSpeech } from "../../../../utils/partsOfSpeech";

const IndexableItems = ({ data, isChecked, setIsChecked }) => {
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
              <TranslationTreeElement
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
            <TranslationTreeElement
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

export default IndexableItems;
