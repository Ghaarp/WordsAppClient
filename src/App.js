import classes from "./components/styles/app.module.css";
import { getClass } from "./utils/cssClasses";
import AppContainer from "./components/AppContainer";
import { BrowserRouter } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./index";
import ErrorBar from "./components/common/ErrorBar";

function App() {
  return (
    <BrowserRouter>
      <ErrorBar />
      <AppContainer
        className={getClass([classes.container, classes.background])}
      />
    </BrowserRouter>
  );
}

export default App;
