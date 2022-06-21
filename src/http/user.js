import { CustomResponse } from "./response/CustomResponse";
import { host } from "./index";
import { LOGIN_PATH, REGISTRATION_PATH } from "./paths/paths";

export const loginOnServer = async (login, password) => {
  try {
    const data = await host.post(LOGIN_PATH, { login, password });
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};

export const registerOnServer = async (login, password) => {
  try {
    const data = await host.post(REGISTRATION_PATH, { login, password });
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};
