import React, { useContext } from "react";
import ImageBlock from "../ImageBlock";
import HidableGroup from "../HidableGroup";
import { Context } from "../../../../index";
import TranslationTreeComponent from "../TranslationTreeComponent";

const GroupedData = ({ data, groupName, isImageBlock }) => {
  const { translationResult } = useContext(Context);
  const { id, isChecked } = data;

  const updateIsChecked = (value) => {
    if (!translationResult) return;
    translationResult.updateIsChecked(id, value);
  };

  return (
    <HidableGroup
      groupName={groupName}
      selectable={true}
      isChecked={isChecked}
      setIsChecked={updateIsChecked}
    >
      {isImageBlock ? (
        <ImageBlock data={data} />
      ) : (
        <TranslationTreeComponent data={data} />
      )}
    </HidableGroup>
  );
};

export default GroupedData;
