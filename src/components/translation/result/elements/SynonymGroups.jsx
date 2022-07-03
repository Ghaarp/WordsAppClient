import React from "react";
import classes from "./styles/elements.module.css";
import HidableGroup from "../HidableGroup";
import TranslationTreeComponent from "../TranslationTreeComponent";

const SynonymGroups = ({ data }) => {
  return (
    <HidableGroup groupName="Синонимы">
      <div className={classes.synonymGroups}>
        {data.synonymGroups.map((element) => (
          <TranslationTreeComponent data={element} />
        ))}
      </div>
    </HidableGroup>
  );
};

export default SynonymGroups;
