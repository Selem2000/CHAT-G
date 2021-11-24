import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Load from "../../Components/Load/Load";
import Errors from "../../Components/Errors/Error";
import { current, updateUser } from "../../Redux/actions/user";
import "./Friends.css";
import BackgroundLetterAvatars from "../../Components/Avatar/BackgroundLetterAvatars";
import { Button } from "@mui/material";

const Friends = () => {
  const user = useSelector((state) => state.userReducer.user);
  const load = useSelector((state) => state.postReducer.load);
  const errors = useSelector((state) => state.postReducer.errors);
  const [updatedUser, setUpdatedUser] = useState({});
  const [updatedFriend, setUpdatedFriend] = useState({});
  const dispatch = useDispatch();
  const btnStyle = { color: " #fff", fontSize: "24px" };

  return (
    <div className="Friend-list">
      {load ? (
        <Load />
      ) : user.FriendList != [] ? (
        user.FriendList.map((friend) => (
          <div className="card">
            <div className="user-head">
              <BackgroundLetterAvatars
                firstName={friend.firstName}
                lastName={friend.lastName}
              />
              <h2 className="user-name">{`${friend.firstName} ${friend.lastName}`}</h2>
            </div>
            <h2 className="friend-nbr">{friend.FriendList.length} friends</h2>

            <Button
              style={btnStyle}
              onClick={() => {
                setUpdatedUser({
                  FriendList: user.FriendList.filter(
                    (e) => e._id != friend._id
                  ),
                });
                setUpdatedFriend({
                  FriendList: friend.FriendList.filter((e) => e != user._id),
                });
                dispatch(updateUser(user._id, updatedUser));
                dispatch(updateUser(friend._id, updatedFriend));
                dispatch(current());
              }}
            >
              unfriend
            </Button>
          </div>
        ))
      ) : (
        <h2>no Friend</h2>
      )}
    </div>
  );
};

export default Friends;
