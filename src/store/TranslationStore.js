import { action, computed, makeObservable, observable } from "mobx";
import { TranslationHelper } from "../helpers/translationHelper";
import { createCard, fetchTranslation, getCardData } from "../http/card";
import { RequestHelper } from "../http/helpers/requestHelper";

export const Operations = { TRANSLATE: 1, SHOW: 2 };

export class TranslationStore {
  _translation;
  _isLoading;
  _translationOriginal;
  _operation;
  _isSelectionEnabled = false;
  _contextStore;

  constructor(contextStore) {
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

    this._contextStore = contextStore;
  }

  // Setters
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

  // Getters
  get translation() {
    return this._translation;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isSelectionEnabled() {
    return this._isSelectionEnabled;
  }

  // Private methods
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

  // Public methods
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

    const res = await RequestHelper.makeRequest(
      fetchTranslation,
      { expression },
      this.setIsLoading,
      this,
      this._contextStore.error
    );
    const translationData = res?.response?.data;
    this.setTranslation(translationData);
  }

  async createNewCard() {
    const cardJSON = this.formCardJSON();
    return await RequestHelper.makeRequest(
      createCard,
      { cardJSON },
      this.setIsLoading,
      this,
      this._contextStore.error
    );
  }

  async fetchCardData(id) {
    this.reset();
    this._setOperation(Operations.SHOW);

    const res = await RequestHelper.makeRequest(
      getCardData,
      { id },
      this.setIsLoading,
      this,
      this._contextStore.error
    );
    const translationData = res?.response?.data;
    this.setTranslation(translationData);
  }
}
