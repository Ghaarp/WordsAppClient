import React, { useState } from "react";
import classes from "./styles/friends.module.css";
import StyledInput from "../common/StyledInput";
import AppButton from "../common/AppButton";

const FriendSearchComponent = () => {
  const [friendLogin, setFriendLogin] = useState();
  return (
    <div className={classes.friendSearchContainer}>
      <StyledInput
        className={classes.input}
        label={"Имя"}
        setValue={setFriendLogin}
        type={"friendLogin"}
      />
      <AppButton>Добавить</AppButton>
    </div>
  );
};

export default FriendSearchComponent;
