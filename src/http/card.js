import { authHost } from "./index";
import { TRANSLATE_PATH } from "./paths/paths";
import { CustomResponse } from "./response/CustomResponse";

export const fetchTranslation = async (expression) => {
  try {
    const data = await authHost.post(TRANSLATE_PATH, { expression });
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};
