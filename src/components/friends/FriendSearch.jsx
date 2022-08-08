import React, { useContext, useState } from "react";
import classes from "./styles/friends.module.css";
import StyledInput from "../common/StyledInput";
import AppButton from "../common/AppButton";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { getClass } from "../../utils/cssClasses";

const FriendSearch = observer(({ className }) => {
  const { friends } = useContext(Context);
  const { successfulOperation, resultMessage } = friends;

  const [friendLogin, setFriendLogin] = useState("");

  const addFriend = () => {
    if (!friendLogin) return;

    friends.inviteFriend(friendLogin);
  };

  const onPressEnter = (event) => {
    if (event.code === "Enter") {
      addFriend();
    }
  };

  return (
    <div className={getClass([className, classes.friendSearchContainer])}>
      <StyledInput
        autoFocus={true}
        className={classes.input}
        label={"Имя"}
        value={friendLogin}
        onChange={(e) => setFriendLogin(e.target.value)}
        type={"friendLogin"}
        onKeyPress={onPressEnter}
      />
      {successfulOperation ? null : (
        <div className={classes.error}>{resultMessage}</div>
      )}
      <AppButton onClick={addFriend}>Добавить</AppButton>
    </div>
  );
});

export default FriendSearch;
