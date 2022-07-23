import React, { useContext, useState } from "react";
import classes from "./styles/tree.module.css";
import { getClass } from "../../../utils/cssClasses";
import CheckBox from "./elements/CheckBox";
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
        innerIndex ? classes.borderedContainer : "",
      ])}
    >
      {/* Selection checkbox */}
      {selectable && isSelectionEnabled ? (
        <CheckBox value={isChecked} switchFunction={updateIsChecked} />
      ) : null}

      {/* Element index */}
      {innerIndex ? <ElementIndex innerIndex={innerIndex} /> : null}

      {/* Inner element container for data */}
      <div
        className={getClass([
          classNameAdditive,
          classes.TranslationTreeComponent,
        ])}
      >
        {data && data.imageData ? (
          <GroupedData
            data={data.imageData}
            isImageBlock={true}
            groupName={"Изображения"}
          />
        ) : null}

        {data && data.translationsData ? (
          <GroupedData
            data={data.translationsData}
            groupName={"Варианты перевода"}
          />
        ) : null}

        {data && data.definitionsData ? (
          <GroupedData data={data.definitionsData} groupName={"Определения"} />
        ) : null}

        {data && data.examplesData ? (
          <GroupedData data={data.examplesData} groupName={"Примеры"} />
        ) : null}

        {/* Tags list (container) */}
        {data && data.tags ? <TagsList data={data} /> : null}

        {/* Tag element */}
        {data && data.tag ? <Tag data={data} /> : null}

        {/* Meaning with example (if presented) (element) */}
        {data && data.meaning ? <Meaning data={data} /> : null}

        {/* Translation element with rarity of using (1 == most frequent, 3 == very rare) */}
        {data && data.value && data.rarity ? <Translation data={data} /> : null}

        {/* Example element */}
        {data && data.example ? <Example data={data} /> : null}

        {/* Synonym element */}
        {data && data.synonym ? <Synonym data={data} /> : null}

        {/* Translations container */}
        {data && data.translations ? <TranslationsList data={data} /> : null}

        {/* Synonym groups (container) */}
        {data && data.synonymGroups ? <SynonymGroups data={data} /> : null}

        {/* Container with items */}
        {data && data.items ? <ItemsContainer data={data} /> : null}

        {/* Container with indexed items (to show nums) */}
        {data && data.indexableItems ? (
          <IndexableItemsContainer
            data={data}
            isChecked={isChecked}
            setIsChecked={updateIsChecked}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TranslationTreeComponent;
