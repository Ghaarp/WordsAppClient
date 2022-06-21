import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const Friends = observer(({ className, children }) => {
  const { user, appState } = useContext(Context);

  const isAuth = user.isAuth;
  const friendsState = appState.friends;

  return (
    <div>
      {isAuth && friendsState ? (
        <div className={className}>{children}</div>
      ) : (
        <div />
      )}
    </div>
  );
});

export default Friends;
