import { RequestHelper } from "./helpers/requestHelper";
import { authHost } from "./index";
import {
  FRIENDLIST_PATH,
  GET_CARD_DATA,
  INVITE_FRIEND_PATH,
  REMOVE_FRIEND_PATH,
  REMOVE_FRIENDSHIP_PATH,
  SHARE_CARDS_PATH,
  TRANSLATE_PATH,
} from "./paths/paths";

export const inviteFriend = async ({ login }) => {
  const request = async () => {
    return await authHost.get(`${INVITE_FRIEND_PATH}${login}`);
  };

  return await RequestHelper.makeRequest(request);
};

export const removeFriend = async ({ id }) => {
  const request = async () => {
    return await authHost.get(`${REMOVE_FRIEND_PATH}${id}`);
  };

  return await RequestHelper.makeRequest(request);
};

export const removeFriendshipRow = async ({ id }) => {
  const request = async () => {
    return await authHost.get(`${REMOVE_FRIENDSHIP_PATH}${id}`);
  };

  return await RequestHelper.makeRequest(request);
};

export const fetchFriendList = async () => {
  const request = async () => {
    return await authHost.get(FRIENDLIST_PATH);
  };

  return await RequestHelper.makeRequest(request);
};

export const optionShareCards = async ({ friendId, shareCards }) => {
  const request = async () => {
    return await authHost.post(SHARE_CARDS_PATH, { friendId, shareCards });
  };

  return await RequestHelper.makeRequest(request);
};
