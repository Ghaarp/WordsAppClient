import { makeAutoObservable } from "mobx";
import { TranslationHelper } from "../helpers/translationHelper";

export class TranslationStore {
  constructor() {
    this._translation = undefined;
    this._isLoading = false;
    makeAutoObservable(this);
  }

  setTranslation(result) {
    this._isLoading = false;
    const translationHelper = new TranslationHelper();
    const res = translationHelper.addRequiredFields(result);
    this._translation = res;
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
