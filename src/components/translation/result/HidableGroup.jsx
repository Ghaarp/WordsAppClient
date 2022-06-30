import React, { useState } from "react";
import classes from "./styles/hidable.module.css";
import commonClasses from "../../../styles/common.module.css";
import { getClass } from "../../../utils/cssClasses";

const HidableGroup = ({ groupName, defaultState, children }) => {
  const [isHidden, setIsHidden] = useState(defaultState || true);

  const updateHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={getClass([
        classes.hidableGroup,
        isHidden ? classes.hidden : "",
      ])}
    >
      <div
        className={getClass([
          classes.header,
          commonClasses.unselectable,
          isHidden ? classes.hidden : "",
        ])}
        onClick={updateHidden}
      >
        {groupName}
      </div>
      <div
        className={getClass([classes.content, isHidden ? classes.hidden : ""])}
      >
        {children}
      </div>
    </div>
  );
};

export default HidableGroup;
