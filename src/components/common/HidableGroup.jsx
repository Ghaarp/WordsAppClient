import React, { useState } from "react";
import classes from "./styles/hidable.module.css";
import commonClasses from "../../styles/common.module.css";
import { getClass } from "../../utils/cssClasses";
import CheckBox from "./CheckBox";

const HidableGroup = ({
  className,
  groupName,
  isHiddenByDefault,
  children,
  selectable,
  isChecked,
  setIsChecked,
}) => {
  const [isHidden, setIsHidden] = useState(isHiddenByDefault);

  const updateHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      className={getClass([
        className,
        classes.hidableGroup,
        isHidden && classes.hidden,
      ])}
    >
      {selectable && (
        <CheckBox
          className={classes.groupCheckbox}
          value={isChecked}
          switchFunction={setIsChecked}
        />
      )}

      <div
        className={getClass([
          classes.header,
          commonClasses.unselectable,
          isHidden && classes.hidden,
        ])}
        onClick={updateHidden}
      >
        {groupName}
      </div>
      <div className={getClass([classes.content, isHidden && classes.hidden])}>
        {children}
      </div>
    </div>
  );
};

export default HidableGroup;
