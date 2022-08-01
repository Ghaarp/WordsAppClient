import classes from "./components/styles/app.module.css";
import { getClass } from "./utils/cssClasses";
import AppContainer from "./components/composition/AppContainer";
import { BrowserRouter } from "react-router-dom";
import React from "react";
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
