import { makeAutoObservable } from "mobx";

export class CardsStore {
  constructor() {
    this._list = [];
    makeAutoObservable(this);
  }

  addToList(items) {
    this._list = items;
  }

  get list() {
    return this._list;
  }
}
