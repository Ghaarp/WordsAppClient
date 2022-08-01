import React, { useContext } from "react";
import classes from "./styles/friends.module.css";
import CheckBox from "../common/CheckBox";
import { Context } from "../../index";
import BsFriends from "./buttonSet/BsFriends";
import BsInvited from "./buttonSet/BsInvited";
import BsWaiting from "./buttonSet/BsWaiting";

const FriendCard = ({ data }) => {
  const { friends } = useContext(Context);

  const { sharecards, friend, friendlogin, id } = data;

  const acceptFriend = () => {
    if (!friendlogin) return;

    friends.inviteFriend(friendlogin);
  };

  const removeFriend = () => {
    if (!friendlogin) return;

    friends.removeFriend(friendlogin);
  };

  const setShareCards = () => {
    if (!id) return;

    const newValue = !sharecards;
    friends.optionShareCards(friend, newValue);
  };

  const removeFriendship = () => {
    if (!id) return;

    friends.removeFriendshipRow(id);
  };

  return (
    <div className={classes.friendCard}>
      <div className={classes.cardHeader}>
        <div className={classes.login}>{friendlogin}</div>

        {data.type === "0" && <BsFriends removeFriend={removeFriend} />}
        {data.type === "1" && <BsInvited decline={removeFriendship} />}
        {data.type === "2" && (
          <BsWaiting accept={acceptFriend} decline={removeFriendship} />
        )}
      </div>
      {data.type === "0" && (
        <div className={classes.optionContainer}>
          <div className={classes.optionLabel}>Показывать ваши карточки</div>
          <div className={classes.checkBoxContainer}>
            <CheckBox value={sharecards} switchFunction={setShareCards} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendCard;
