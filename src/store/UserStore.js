import { makeAutoObservable } from "mobx";
import { TOKEN_STORAGE_KEY } from "../utils/consts";
import jwt_decode from "jwt-decode";

export class UserStore {
  constructor() {
    this._isAuth = false;
    this._login = "";
    this._token = "";
    makeAutoObservable(this);
  }

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
      localStorage.setItem(TOKEN_STORAGE_KEY, this._token);
    } catch (e) {
      this.logOut();
    }
  }

  logOut() {
    this._isAuth = false;
    this._token = "";
    this._login = "";
    localStorage.setItem(TOKEN_STORAGE_KEY, this._token);
  }

  get isAuth() {
    return this._isAuth;
  }

  get login() {
    return this._login;
  }
}
