import { authHost } from "./index";
import {
  CREATE_CARD_PATH,
  GET_CARD_DATA,
  GET_CARD_DATA_PATH,
  GET_CARDS_LIST_PATH,
  TRANSLATE_PATH,
} from "./paths/paths";
import { RequestHelper } from "./helpers/requestHelper";

export const fetchTranslation = async ({ expression }) => {
  const request = async () => {
    return await authHost.post(TRANSLATE_PATH, { expression });
  };
  return await RequestHelper.makeRequest(request);
};

export const createCard = async (card) => {
  const request = async () => {
    return await authHost.post(CREATE_CARD_PATH, { card });
  };

  return await RequestHelper.makeRequest(request);
};

export const getCardsData = async (id) => {
  const request = async () => {
    return await authHost.post(GET_CARDS_LIST_PATH);
  };

  return await RequestHelper.makeRequest(request);
};

export const getCardData = async ({ id }) => {
  const request = async () => {
    return await authHost.get(`${GET_CARD_DATA_PATH}${id}`);
  };
  return await RequestHelper.makeRequest(request);
};
