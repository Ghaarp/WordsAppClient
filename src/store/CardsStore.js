import { makeAutoObservable } from "mobx";
import { getCardsData, removeCard } from "../http/card";
import { RequestHelper } from "../http/helpers/requestHelper";

export class CardsStore {
  _countPerPage = 3;

  constructor(contextStore) {
    this.reset();
    makeAutoObservable(this);
    this._contextStore = contextStore;
  }

  //Setters

  setIsLoading(value) {
    this._isLoading = value;
  }

  setList(items) {
    this._list = items;
  }

  setPage(value) {
    this._page = value;
  }

  setTotal(value) {
    this._total = value;
  }

  setPagesTotal(value) {
    this._pagesTotal = value;
  }

  //Getters

  get list() {
    return this._list;
  }

  get isLoading() {
    return this._isLoading;
  }

  get page() {
    return this._page;
  }

  get total() {
    return this._total;
  }

  get pagesTotal() {
    return this._pagesTotal;
  }

  //Private methods
  async _loadPage(page) {
    const res = await RequestHelper.makeRequest(
      getCardsData,
      { count: this._countPerPage, page },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    const data = res?.response?.data;
    if (!data) return;

    this.setList(this._list.concat(data.cards));
    this.setPage(data.page);
    this.setTotal(data.total);
    this.setPagesTotal(~~(data.total / this._countPerPage));
  }

  //Public methods
  reset() {
    this._list = [];
    this._isLoading = false;
    this._page = -1;
    this._total = 0;
    this._pagesTotal = 0;
  }

  loadNextPage() {
    if (this._page < this._pagesTotal) this._loadPage(this._page + 1);
  }

  async removeCard(id) {
    const res = await RequestHelper.makeRequest(
      removeCard,
      { id },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    if (res.isError) return;

    this.setList(this._list.filter((item) => item.id !== id));
  }
}
