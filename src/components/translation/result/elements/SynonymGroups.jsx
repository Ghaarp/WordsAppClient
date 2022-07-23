import React from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../../../common/HidableGroup";
import TranslationTreeComponent from "../TranslationTreeComponent";

const SynonymGroups = ({ data }) => {
  return (
    <HidableGroup groupName="Синонимы" isHiddenByDefault={true}>
      <div className={classes.synonymGroups}>
        {data.synonymGroups.map((element) => (
          <TranslationTreeComponent key={element.id} data={element} />
        ))}
      </div>
    </HidableGroup>
  );
};

export default SynonymGroups;
