import React, { useContext } from "react";
import ImageBlock from "../ImageBlock";
import HidableGroup from "../../../common/HidableGroup";
import { Context } from "../../../../index";
import TranslationTreeElement from "../TranslationTreeElement";

const GroupedData = ({ data, groupName, isImageBlock }) => {
  const { translationResult } = useContext(Context);
  const { isSelectionEnabled } = translationResult;
  const { id, isChecked } = data;

  const updateIsChecked = (value) => {
    if (!translationResult) return;
    translationResult.updateIsChecked(id, value);
  };

  return (
    <HidableGroup
      groupName={groupName}
      selectable={isSelectionEnabled}
      isChecked={isChecked}
      setIsChecked={updateIsChecked}
      isHiddenByDefault={true}
    >
      {isImageBlock ? (
        <ImageBlock data={data} />
      ) : (
        <TranslationTreeElement data={data} />
      )}
    </HidableGroup>
  );
};

export default GroupedData;
