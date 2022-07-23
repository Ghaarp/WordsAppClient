import { makeAutoObservable } from "mobx";
import { CardsHttpHelper } from "../helpers/cardsHttpHelper";
import {
  fetchFriendList,
  inviteFriend,
  optionShareCards,
  removeFriend,
  removeFriendshipRow,
} from "../http/friend";

export class FriendsStore {
  constructor() {
    this.reset();
    makeAutoObservable(this);
  }

  reset() {
    this._friendList = [];
    this._resultMessage = "";
    this._successfulOperation = false;
    this._isLoading = false;
    this._needUpdate = true;
  }

  setFriendList(value) {
    this._friendList = value;
  }

  setResultMessage(value) {
    this._resultMessage = value;
  }

  setSuccessfulOperation(value) {
    this._successfulOperation = value;
  }

  setIsLoading(value) {
    this._isLoading = value;
  }

  setNeedUpdate(value) {
    this._needUpdate = value;
  }

  get friendList() {
    return this._friendList;
  }

  get resultMessage() {
    return this._resultMessage;
  }

  get successfulOperation() {
    return this._successfulOperation;
  }

  get isLoading() {
    return this._isLoading;
  }

  get needUpdate() {
    return this._needUpdate;
  }

  async inviteFriend(login) {
    this.reset();
    const res = await CardsHttpHelper.fetchData(
      inviteFriend,
      { login },
      this.setIsLoading,
      this
    );

    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }

  async removeFriend(id) {
    this.reset();
    const res = await CardsHttpHelper.fetchData(
      removeFriend,
      { id },
      this.setIsLoading,
      this
    );

    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }

  async removeFriendshipRow(id) {
    this.reset();
    const res = await CardsHttpHelper.fetchData(
      removeFriendshipRow,
      { id },
      this.setIsLoading,
      this
    );

    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }

  async fetchFriendList() {
    this.reset();
    this.setNeedUpdate(false);

    const res = await CardsHttpHelper.fetchData(
      fetchFriendList,
      {},
      this.setIsLoading,
      this
    );

    this.setFriendList(res?.response?.data);
  }

  async optionShareCards(id, value) {
    this.reset();
    const res = await CardsHttpHelper.fetchData(
      optionShareCards,
      { friendId: id, shareCards: value },
      this.setIsLoading,
      this
    );

    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }
}
