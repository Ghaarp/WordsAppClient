import { makeAutoObservable } from "mobx";
import {
  fetchFriendList,
  inviteFriend,
  optionShareCards,
  removeFriend,
  removeFriendshipRow,
} from "../http/friend";
import { RequestHelper } from "../http/helpers/requestHelper";

export class FriendsStore {
  constructor(contextStore) {
    this.reset();
    makeAutoObservable(this);
    this._contextStore = contextStore;
  }

  //Setters
  setFriendList(value) {
    this._friendList = value;
  }

  //Getters
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

  //Public methods
  reset() {
    this._friendList = [];
    this._resultMessage = "";
    this._successfulOperation = false;
    this._isLoading = false;
    this._needUpdate = false;
  }

  async inviteFriend(login) {
    const res = await RequestHelper.makeRequest(
      inviteFriend,
      { login },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    if (res.isError) return false;

    this.reset();
    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }

  async removeFriend(id) {
    const res = await RequestHelper.makeRequest(
      removeFriend,
      { id },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    if (res.isError) return false;

    this.reset();
    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }

  async removeFriendshipRow(id) {
    const res = await RequestHelper.makeRequest(
      removeFriendshipRow,
      { id },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    if (res.isError) return false;

    this.reset();
    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }

  async fetchFriendList() {
    this.reset();
    this.setNeedUpdate(false);

    const res = await RequestHelper.makeRequest(
      fetchFriendList,
      {},
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    this.setFriendList(res?.response?.data);
  }

  async optionShareCards(id, value) {
    const res = await RequestHelper.makeRequest(
      optionShareCards,
      { friendId: id, shareCards: value },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    if (res.isError) return false;

    this.reset();
    this.setSuccessfulOperation(res?.response?.data?.successfulOperation);
    this.setNeedUpdate(true);
  }
}
