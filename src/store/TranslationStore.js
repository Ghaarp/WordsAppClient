import { makeAutoObservable, toJS } from "mobx";

export class TranslationStore {
  constructor() {
    this._translation = undefined;
    makeAutoObservable(this);
  }

  setTranslation(result) {
    this._translation = result;
  }

  get translation() {
    return this._translation;
  }
}
