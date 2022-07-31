import { host } from "./index";
import { LOGIN_PATH, REGISTRATION_PATH } from "./paths/paths";

export const loginOnServer = async ({ login, password }) => {
  console.log("loginOnServer");
  return await host.post(LOGIN_PATH, { login, password });
};

export const registerOnServer = async ({ login, password }) => {
  console.log("registerOnServer");
  return await host.post(REGISTRATION_PATH, { login, password });
};
