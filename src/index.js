import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserStore } from "./store/UserStore";
import { AppState } from "./store/AppState";
import { TranslationStore } from "./store/TranslationStore";
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      appState: new AppState(),
      translationResult: new TranslationStore(),
    }}
  >
    <App />
  </Context.Provider>
);
