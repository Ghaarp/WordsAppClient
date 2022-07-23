import React, { useCallback, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import classes from "./styles/friends.module.css";
import FriendSearchComponent from "./FriendSearchComponent";
import { toJS } from "mobx";
import FriendCard from "./FriendCard";
import HidableGroup from "../common/HidableGroup";

const Friends = observer(({ className }) => {
  const [allLists, setAllLists] = useState([]);

  const { user, appState, friends } = useContext(Context);
  const { needUpdate, friendList } = friends;

  const isAuth = user.isAuth;
  const friendsState = appState.friends;

  const friendsArray = toJS(friendList);

  useEffect(() => {
    if (needUpdate) friends.fetchFriendList();
  }, [needUpdate]);

  const filter = useCallback((list, friendType) => {
    return list.filter((item) => item?.type === friendType);
  }, []);

  const sort = useCallback((list) => {
    return list.sort((a, b) => {
      if (a.friendlogin < b.friendlogin) return -1;
      if (a.friendlogin > b.friendlogin) return 1;
      return 0;
    });
  }, []);

  useEffect(() => {
    if (!friendsArray) return;

    setAllLists([
      { name: "Друзья", list: sort(filter(friendsArray, "0")) },
      { name: "Приглашены", list: sort(filter(friendsArray, "1")) },
      { name: "Ожидают", list: sort(filter(friendsArray, "2")) },
    ]);

    console.log(allLists);
  }, [friendList]);

  return (
    <div>
      {isAuth && friendsState ? (
        <div className={classes.friendsPanel}>
          <FriendSearchComponent />
          {allLists
            ? allLists.map((listObj, index) => {
                console.log(listObj);
                return listObj && listObj.list && listObj.list.length ? (
                  <HidableGroup
                    key={index}
                    selectable={false}
                    groupName={listObj.name}
                    isHiddenByDefault={false}
                  >
                    {listObj.list.map((item) => {
                      return <FriendCard key={item.id} data={item} />;
                    })}
                  </HidableGroup>
                ) : null;
              })
            : null}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
});

export default Friends;
