import React, { useContext, useState } from "react";
import classes from "./styles/tree.module.css";
import { getClass } from "../../../utils/cssClasses";
import CheckBox from "../../common/CheckBox";
import ElementIndex from "./elements/ElementIndex";
import TagsList from "./elements/TagsList";
import Tag from "./elements/Tag";
import Meaning from "./elements/Meaning";
import Translation from "./elements/Translation";
import Example from "./elements/Example";
import Synonym from "./elements/Synonym";
import TranslationsList from "./elements/TranslationsList";
import SynonymGroups from "./elements/SynonymGroups";
import ItemsContainer from "./elements/ItemsContainer";
import IndexableItemsContainer from "./elements/IndexableItemsContainer";
import { Context } from "../../../index";
import GroupedData from "./elements/GroupedData";

const TranslationTreeComponent = ({
  data,
  innerIndex,
  classNameAdditive,
  selectable,
}) => {
  const { translationResult } = useContext(Context);
  const { isSelectionEnabled } = translationResult;

  const { id, isChecked } = data;

  const updateIsChecked = (value) => {
    if (!translationResult) return;
    translationResult.updateIsChecked(id, value);
  };

  return (
    //Main container
    <div
      className={getClass([
        classes.TranslationTreeContainer,
        innerIndex && classes.borderedContainer,
      ])}
    >
      {/* Selection checkbox */}
      {selectable && isSelectionEnabled && (
        <CheckBox value={isChecked} switchFunction={updateIsChecked} />
      )}

      {/* Element index */}
      {innerIndex && <ElementIndex innerIndex={innerIndex} />}

      {/* Inner element container for data */}
      <div
        className={getClass([
          classNameAdditive,
          classes.TranslationTreeComponent,
        ])}
      >
        {data && data.imageData && (
          <GroupedData
            data={data.imageData}
            isImageBlock={true}
            groupName={"Изображения"}
          />
        )}

        {data?.translationsData && (
          <GroupedData
            data={data.translationsData}
            groupName={"Варианты перевода"}
          />
        )}

        {data?.definitionsData && (
          <GroupedData data={data.definitionsData} groupName={"Определения"} />
        )}

        {data?.examplesData && (
          <GroupedData data={data.examplesData} groupName={"Примеры"} />
        )}

        {/* Tags list (container) */}
        {data?.tags && <TagsList data={data} />}

        {/* Tag element */}
        {data?.tag && <Tag data={data} />}

        {/* Meaning with example (if presented) (element) */}
        {data?.meaning && <Meaning data={data} />}

        {/* Translation element with rarity of using (1 == most frequent, 3 == very rare) */}
        {data?.value && data.rarity && <Translation data={data} />}

        {/* Example element */}
        {data?.example && <Example data={data} />}

        {/* Synonym element */}
        {data?.synonym && <Synonym data={data} />}

        {/* Translations container */}
        {data?.translations && <TranslationsList data={data} />}

        {/* Synonym groups (container) */}
        {data?.synonymGroups && <SynonymGroups data={data} />}

        {/* Container with items */}
        {data?.items && <ItemsContainer data={data} />}

        {/* Container with indexed items (to show nums) */}
        {data?.indexableItems && (
          <IndexableItemsContainer
            data={data}
            isChecked={isChecked}
            setIsChecked={updateIsChecked}
          />
        )}
      </div>
    </div>
  );
};

export default TranslationTreeComponent;
