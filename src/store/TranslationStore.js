import { action, computed, makeObservable, observable } from "mobx";
import { TranslationHelper } from "../helpers/translationHelper";
import { fetchTranslation, getCardData } from "../http/card";
import { CardsHttpHelper } from "../helpers/cardsHttpHelper";

export const Operations = { TRANSLATE: 1, SHOW: 2 };

export class TranslationStore {
  _translation;
  _isLoading;
  _translationOriginal;
  _operation;
  _isSelectionEnabled = false;

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

  //Private methods
  _updateTranslation() {
    this._translation = this._translationOriginal;
  }

  _setDefaultData() {
    this._translation = undefined;
    this._translationOriginal = undefined;
    this._isLoading = false;
    this._operation = 0;
  }

  _setOperation(value) {
    this._operation = value;

    switch (this._operation) {
      case Operations.TRANSLATE:
        this._isSelectionEnabled = true;
        break;

      default:
        this._isSelectionEnabled = false;
        break;
    }
  }

  //Setters

  setTranslation(result) {
    this._isLoading = false;
    this._translationOriginal =
      this._operation === Operations.TRANSLATE
        ? new TranslationHelper(result).addRequiredFields()
        : result;
    this._updateTranslation();
  }

  setIsLoading(value) {
    this._isLoading = value;
  }

  //Getters
  get translation() {
    return this._translation;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isSelectionEnabled() {
    return this._isSelectionEnabled;
  }

  //Public methods
  updateIsChecked(id, value) {
    if (!this._translationOriginal) return;
    const translationHelper = new TranslationHelper(this._translationOriginal);
    translationHelper.updateIsChecked(id, value);
    this._updateTranslation();
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

  async translateExpression(expression) {
    this.reset();
    this._setOperation(Operations.TRANSLATE);

    const res = await CardsHttpHelper.fetchData(
      fetchTranslation,
      { expression },
      this.setIsLoading,
      this
    );
    console.log(res);
    const translationData = res?.response?.data;
    this.setTranslation(translationData);
  }

  async fetchCardData(id) {
    this.reset();
    this._setOperation(Operations.SHOW);

    const res = await CardsHttpHelper.fetchData(
      getCardData,
      { id },
      this.setIsLoading,
      this
    );
    console.log(res);
    const translationData = res?.response?.data;
    this.setTranslation(translationData);
  }
}
