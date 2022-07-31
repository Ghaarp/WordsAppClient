import { makeAutoObservable } from "mobx";
import { TOKEN_STORAGE_KEY } from "../utils/consts";
import jwt_decode from "jwt-decode";
import { RequestHelper } from "../http/helpers/requestHelper";
import { loginOnServer, registerOnServer } from "../http/user";

export class UserStore {
  constructor(contextStore) {
    this._isAuth = false;
    this._login = "";
    this._token = "";
    this._id = -1;
    this._isLoading = false;
    makeAutoObservable(this);
    this._contextStore = contextStore;
  }

  //Setters
  setIsLoading(value) {
    this._isLoading = value;
  }

  //Getters
  get isLoading() {
    return this._isLoading;
  }

  get isAuth() {
    return this._isAuth;
  }

  get login() {
    return this._login;
  }

  get id() {
    return this._id;
  }

  //Public methods
  tryLoginByToken() {
    if (this._isAuth) return;
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) this.updateToken(token);
  }

  updateToken(value) {
    try {
      const decodedToken = jwt_decode(value);
      this._isAuth = true;
      this._token = value;
      this._login = decodedToken.login;
      this._id = decodedToken.id;
      localStorage.setItem(TOKEN_STORAGE_KEY, this._token);
    } catch (e) {
      this.logOut();
    }
  }

  logOut() {
    this._isAuth = false;
    this._token = "";
    this._login = "";
    this._id = -1;
    this._contextStore.friends.setNeedUpdate(false);
    localStorage.setItem(TOKEN_STORAGE_KEY, this._token);
  }

  async loginOrRegister(isLogin, login, password) {
    const res = await RequestHelper.makeRequest(
      isLogin ? loginOnServer : registerOnServer,
      { login, password },
      this.setIsLoading,
      this,
      this._contextStore.error
    );

    if (res.isError) return false;

    const token = res.response.data;
    this.updateToken(token);
    this._contextStore.friends.setNeedUpdate(true);
    return true;
  }
}
