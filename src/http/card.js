import { authHost } from "./index";
import {
  CREATE_CARD_PATH,
  GET_CARD_DATA_PATH,
  GET_CARDS_LIST_PATH,
  REMOVE_CARD_PATH,
  TRANSLATE_PATH,
} from "./paths/paths";

export const fetchTranslation = async ({ expression }) => {
  console.log("fetchTranslation");
  return await authHost.post(TRANSLATE_PATH, { expression });
};

export const createCard = async ({ cardJSON }) => {
  console.log("createCard");
  return await authHost.post(CREATE_CARD_PATH, { card: cardJSON });
};

export const removeCard = async ({ id }) => {
  console.log("removeCard");
  return await authHost.post(REMOVE_CARD_PATH, { cardId: id });
};

export const getCardsData = async ({ count, page }) => {
  console.log("getCardsData");
  return await authHost.post(GET_CARDS_LIST_PATH, { count, page });
};

export const getCardData = async ({ id }) => {
  console.log("getCardData");
  return await authHost.get(`${GET_CARD_DATA_PATH}${id}`);
};
