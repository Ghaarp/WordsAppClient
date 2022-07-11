import { makeAutoObservable } from "mobx";
import { getCardsData } from "../http/card";

export class CardsStore {
  constructor() {
    this.reset();
    makeAutoObservable(this);
  }

  setIsLoading(value) {
    this._isLoading = value;
  }

  setIsLoaded(value) {
    this._isLoaded = value;
  }

  setList(items) {
    this._list = items;
  }

  get list() {
    return this._list;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isLoaded() {
    return this._isLoaded;
  }

  reset() {
    this._list = [];
    this._isLoading = false;
    this._isLoaded = false;
  }

  async updateList() {
    this.reset();
    this.setIsLoading(true);

    const getData = async () => {
      const result = await getCardsData();
      this.setIsLoaded(true);

      const data = result?.response?.data;
      if (!data) return;

      this.setList(data);
    };

    await getData();
    this.setIsLoading(false);
  }
}
