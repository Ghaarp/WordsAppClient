import React, { useState } from "react";
import classes from "./styles/hidable.module.css";
import commonClasses from "../../../styles/common.module.css";
import { getClass } from "../../../utils/cssClasses";
import CheckBox from "./elements/CheckBox";

const HidableGroup = ({
  groupName,
  defaultState,
  children,
  selectable,
  isChecked,
  setIsChecked,
}) => {
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
      {selectable ? (
        <CheckBox
          className={classes.groupCheckbox}
          value={isChecked}
          switchFunction={setIsChecked}
        />
      ) : null}

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
