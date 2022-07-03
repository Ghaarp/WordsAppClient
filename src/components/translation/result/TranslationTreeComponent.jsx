import React, { useState } from "react";
import classes from "./styles/tree.module.css";
import { getClass } from "../../../utils/cssClasses";
import HidableGroup from "./HidableGroup";
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

const TranslationTreeComponent = ({ data, innerIndex, classNameAdditive }) => {
  const { id, isCheckedStored } = data;
  const [isChecked, setIsChecked] = useState(isCheckedStored);

  const updateIsChecked = (value) => {
    setIsChecked(value);
  };

  return (
    //Main container
    <div
      className={getClass([
        classes.TranslationTreeContainer,
        innerIndex ? classes.borderedContainer : "",
      ])}
    >
      {/* Element index */}
      {innerIndex ? <ElementIndex innerIndex={innerIndex} /> : null}

      <CheckBox value={isChecked} switchFunction={updateIsChecked} />

      {/* Inner element container for data */}
      <div
        className={getClass([
          classNameAdditive,
          classes.TranslationTreeComponent,
        ])}
      >
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
          <IndexableItemsContainer data={data} />
        ) : null}
      </div>
    </div>
  );
};

export default TranslationTreeComponent;
