import axios from "axios";
import { REACT_APP_API_URL, TOKEN_STORAGE_KEY } from "../utils/consts";

const host = axios.create({
  baseURL: REACT_APP_API_URL,
});

const authHost = axios.create({
  baseURL: REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem(
    TOKEN_STORAGE_KEY
  )}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
