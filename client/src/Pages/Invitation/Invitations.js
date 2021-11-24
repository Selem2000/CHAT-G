import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Load from "../../Components/Load/Load";
import Errors from "../../Components/Errors/Error";
import {
  getAllInvitaions,
  deleteInvitaion,
} from "../../Redux/actions/invitation";
import { updateUser } from "../../Redux/actions/user";
import "./invitation.css";
import BackgroundLetterAvatars from "../../Components/Avatar/BackgroundLetterAvatars";
import { Button } from "@mui/material";

const Invitations = () => {
  const [newUser, setNewUser] = useState({});
  const [newSender, setNewSender] = useState({});
  const invitations = useSelector(
    (state) => state.invitationReducer.invitations
  );
  const load = useSelector((state) => state.invitationReducer.load);
  const errors = useSelector((state) => state.invitationReducer.errors);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInvitaions());
  }, []);
  const btnStyle = { color: " #fff", fontSize: "24px" };

  return (
    <div className="invitation">
      {load ? (
        <Load />
      ) : invitations.length ? (
        invitations
          .filter((e) => e.receiver === user._id)
          .map((invitation) => (
            <div className="card" key={invitation._id}>
              <div className="user-head">
                <BackgroundLetterAvatars
                  firstName={invitation.sender.firstName}
                  lastName={invitation.sender.lastName}
                />
                <h2 className="user-name">{`${invitation.sender.firstName} ${invitation.sender.lastName}`}</h2>
              </div>
              <h2 className="friend-nbr">
                {invitation.sender.FriendList.length} friends
              </h2>

              <Button
                style={btnStyle}
                onClick={() => {
                  setNewUser({
                    FriendList: [...user.FriendList, invitation.sender._id],
                  });
                  setNewSender({
                    FriendList: [...invitation.sender.FriendList, user._id],
                  });
                  dispatch(updateUser(user._id, newUser));
                  dispatch(updateUser(invitation.sender._id, newSender));
                  dispatch(deleteInvitaion(invitation._id));
                }}
              >
                accept
              </Button>

              <Button style={btnStyle}>refuse</Button>
            </div>
          ))
      ) : (
        <h2>no invitations</h2>
      )}
    </div>
  );
};

export default Invitations;
