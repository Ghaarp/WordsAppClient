import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import classes from "./styles/friends.module.css";
import FriendSearchComponent from "./FriendSearchComponent";

const Friends = observer(({ className }) => {
  const { user, appState } = useContext(Context);

  const isAuth = user.isAuth;
  const friendsState = appState.friends;

  return (
    <div>
      {isAuth && friendsState ? (
        <div className={classes.friendsPanel}>
          <FriendSearchComponent />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
});

export default Friends;
