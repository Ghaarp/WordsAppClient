import { action, computed, makeObservable, observable } from "mobx";

export class ErrorStore {
  constructor() {
    this._errorQueue = [];
    makeObservable(this, {
      _errorQueue: observable,
      setNextError: action,
      errorQueue: computed,
    });
  }

  addError(value) {
    this.setNextError(value);
  }

  setNextError(value) {
    if (value) this._errorQueue.push(value);
    this._errorQueue = this._errorQueue.slice();
  }

  get errorQueue() {
    return this._errorQueue;
  }
}
