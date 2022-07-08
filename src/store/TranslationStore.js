import { action, computed, makeObservable, observable } from "mobx";
import { TranslationHelper } from "../helpers/translationHelper";

export class TranslationStore {
  _translation;
  _isLoading;
  _translationOriginal;

  constructor() {
    this._setDefaultData();

    makeObservable(this, {
      _translation: observable,
      _isLoading: observable,
      translation: computed,
      isLoading: computed,
      setTranslation: action,
      _updateTranslation: action,
      setIsLoading: action,
      _setDefaultData: action,
    });
  }

  _setDefaultData() {
    this._translation = undefined;
    this._translationOriginal = undefined;
    this._isLoading = false;
  }

  setTranslation(result) {
    this._isLoading = false;
    this._translationOriginal = new TranslationHelper(
      result
    ).addRequiredFields();
    console.log(this._translationOriginal);
    this._updateTranslation();
  }

  setIsLoading(value) {
    this._isLoading = value;
  }

  updateIsChecked(id, value) {
    if (!this._translationOriginal) return;
    const translationHelper = new TranslationHelper(this._translationOriginal);
    translationHelper.updateIsChecked(id, value);
    this._updateTranslation();
  }

  get translation() {
    return this._translation;
  }

  get isLoading() {
    return this._isLoading;
  }

  reset() {
    this._setDefaultData();
  }

  formCardJSON() {
    return new TranslationHelper(this._translationOriginal).formCardJSON();
  }

  updateIsMainElement(id, value) {
    if (!this._translationOriginal) return;
    const translationHelper = new TranslationHelper(this._translationOriginal);
    translationHelper.updateIsMainElement(id, value);
    this._updateTranslation();
  }

  _updateTranslation() {
    console.log(this._translationOriginal);
    this._translation = this._translationOriginal;
  }
}
