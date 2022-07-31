import { makeAutoObservable } from "mobx";

export class AppState {
  constructor() {
    this._sideBar = false;
    this._friends = false;
    makeAutoObservable(this);
  }

  //Setters
  setSideBar(value) {
    this._sideBar = value;
  }

  setFriends(value) {
    this._friends = value;
  }
  //Getters
  get friends() {
    return this._friends;
  }

  get sideBar() {
    return this._sideBar;
  }

  //Public methods
  hideAll() {
    this.setSideBar(false);
    this.setFriends(false);
  }
}
