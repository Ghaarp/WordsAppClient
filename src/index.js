import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserStore } from "./store/UserStore";
import { AppState } from "./store/AppState";
import { TranslationStore } from "./store/TranslationStore";
import { CardsStore } from "./store/CardsStore";
import { FriendsStore } from "./store/FriendsStore";
import { ErrorStore } from "./store/ErrorStore";
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
const context = {
  create() {
    this.error = new ErrorStore();
    this.user = new UserStore(this);
    this.appState = new AppState();
    this.translationResult = new TranslationStore(this);
    this.cards = new CardsStore(this);
    this.friends = new FriendsStore(this);
    return this;
  },
};

root.render(
  <Context.Provider value={context.create()}>
    <App />
  </Context.Provider>
);
