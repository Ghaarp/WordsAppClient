import React, { useCallback, useContext } from "react";
import classes from "./styles/friends.module.css";
import CheckBox from "../common/CheckBox";
import { Context } from "../../index";
import BsFriends from "./buttonSet/BsFriends";
import BsInvited from "./buttonSet/BsInvited";
import BsWaiting from "./buttonSet/BsWaiting";

const FriendCard = ({ data }) => {
  const { friends } = useContext(Context);

  const { sharecards, friend, friendlogin, id } = data;

  const acceptFriend = useCallback(() => {
    if (!friendlogin) return;

    friends.inviteFriend(friendlogin);
  }, [friends, friendlogin]);

  const removeFriend = useCallback(() => {
    if (!friendlogin) return;

    friends.removeFriend(friendlogin);
  }, [friends, friendlogin]);

  const setShareCards = useCallback(() => {
    if (!id) return;

    const newValue = !sharecards;
    friends.optionShareCards(friend, newValue);
  }, [id, friends, friend, sharecards]);

  const removeFriendship = useCallback(() => {
    if (!id) return;

    friends.removeFriendshipRow(id);
  }, [friends, id]);

  return (
    <div className={classes.friendCard}>
      <div className={classes.cardHeader}>
        <div className={classes.login}>{friendlogin}</div>

        {data.type === "0" ? <BsFriends removeFriend={removeFriend} /> : null}
        {data.type === "1" ? <BsInvited decline={removeFriendship} /> : null}
        {data.type === "2" ? (
          <BsWaiting accept={acceptFriend} decline={removeFriendship} />
        ) : null}
      </div>
      {data.type === "0" ? (
        <div className={classes.optionContainer}>
          <div className={classes.optionLabel}>Показывать ваши карточки</div>
          <div className={classes.checkBoxContainer}>
            <CheckBox value={sharecards} switchFunction={setShareCards} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FriendCard;
