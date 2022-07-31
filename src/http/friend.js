import { authHost } from "./index";
import {
  FRIENDLIST_PATH,
  INVITE_FRIEND_PATH,
  REMOVE_FRIEND_PATH,
  REMOVE_FRIENDSHIP_PATH,
  SHARE_CARDS_PATH,
} from "./paths/paths";

export const inviteFriend = async ({ login }) => {
  console.log("inviteFriend");
  return await authHost.get(`${INVITE_FRIEND_PATH}${login}`);
};

export const removeFriend = async ({ id }) => {
  console.log("removeFriend");
  return await authHost.get(`${REMOVE_FRIEND_PATH}${id}`);
};

export const removeFriendshipRow = async ({ id }) => {
  console.log("removeFriendshipRow");
  return await authHost.get(`${REMOVE_FRIENDSHIP_PATH}${id}`);
};

export const fetchFriendList = async () => {
  console.log("fetchFriendList");
  return await authHost.get(FRIENDLIST_PATH);
};

export const optionShareCards = async ({ friendId, shareCards }) => {
  console.log("optionShareCards");
  return await authHost.post(SHARE_CARDS_PATH, { friendId, shareCards });
};
