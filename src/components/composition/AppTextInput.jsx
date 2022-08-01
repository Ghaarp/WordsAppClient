import React from "react";

const AppTextInput = ({ className, children, onChange }) => {
  return (
    <input className={className} onChange={onChange}>
      {children}
    </input>
  );
};

export default AppTextInput;
