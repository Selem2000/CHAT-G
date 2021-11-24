import React from "react";
import BackgroundLetterAvatars from "../Avatar/BackgroundLetterAvatars";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../Redux/actions/user";

const AdminCard = ({ user }) => {
  const dispatch = useDispatch();

  const btnStyle = { color: " #fff", fontSize: "24px" };

  return (
    <div className="card">
      <div className="user-head">
        <BackgroundLetterAvatars
          firstName={user.firstName}
          lastName={user.lastName}
        />
        <h2 className="user-name">{`${user.firstName} ${user.lastName}`}</h2>
      </div>
      <h2 className="friend-nbr">{user.FriendList.length} friends</h2>
      <Button style={btnStyle} onClick={() => dispatch(deleteUser(user._id))}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default AdminCard;
