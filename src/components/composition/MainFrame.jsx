import React from "react";
import AppRouter from "./AppRouter";

const MainFrame = ({ className, children }) => {
  return (
    <div className={className}>
      <AppRouter>{children}</AppRouter>
    </div>
  );
};

export default MainFrame;
