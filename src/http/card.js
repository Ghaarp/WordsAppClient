import { authHost } from "./index";
import { CREATE_CARD_PATH, TRANSLATE_PATH } from "./paths/paths";
import { CustomResponse } from "./response/CustomResponse";

export const fetchTranslation = async (expression) => {
  try {
    const data = await authHost.post(TRANSLATE_PATH, { expression });
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};

export const createCard = async (card) => {
  try {
    const data = await authHost.post(CREATE_CARD_PATH, { card });
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};
