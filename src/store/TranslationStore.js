import { makeAutoObservable, toJS } from "mobx";

export class TranslationStore {
  constructor() {
    this._translation = undefined;
    this._isLoading = false;
    makeAutoObservable(this);
  }

  setTranslation(result) {
    this._isLoading = false;
    this._translation = result;
  }

  setIsLoading(value) {
    this._isLoading = value;
  }

  get translation() {
    return this._translation;
  }

  get isLoading() {
    return this._isLoading;
  }
}
