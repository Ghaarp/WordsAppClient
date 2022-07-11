import { authHost } from "./index";
import {
  CREATE_CARD_PATH,
  GET_CARD_DATA,
  GET_CARDS_LIST_PATH,
  TRANSLATE_PATH,
} from "./paths/paths";
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

export const getCardsData = async () => {
  try {
    const data = await authHost.post(GET_CARDS_LIST_PATH);
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};

export const getCardData = async (id) => {
  try {
    const data = await authHost.get(`${GET_CARD_DATA}${id}`);
    return new CustomResponse(false, data);
  } catch (e) {
    return new CustomResponse(true, e);
  }
};
