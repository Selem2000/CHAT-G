import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/actions/user";
import Load from "../../Components/Load/Load";
import Errors from "../../Components/Errors/Error";
import "./search.css";
import BackgroundLetterAvatars from "../../Components/Avatar/BackgroundLetterAvatars";
import { Button } from "@mui/material";
import { addInvitaion } from "../../Redux/actions/invitation";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const load = useSelector((state) => state.postReducer.load);
  const errors = useSelector((state) => state.postReducer.errors);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  const handleChange = (e) => setSearch(e.target.value);
  const btnStyle = {
    color: " #fff",
    fontSize: "24px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <div className="search-page">
      <input type="text" className="search-bar" onChange={handleChange} />
      {load ? (
        <Load />
      ) : errors.length ? (
        errors.map((err) => <Errors error={err} />)
      ) : users.length ? (
        users
          .filter(
            (e) =>
              e._id !== user._id &&
              (e.firstName.includes(search) || e.lastName.includes(search)) &&
              e.role === "client"
          )
          .map((e) => (
            <div className="card-user">
              <div className="user-head">
                <BackgroundLetterAvatars
                  firstName={e.firstName}
                  lastName={e.lastName}
                />
                <h2 className="user-name">{`${e.firstName} ${e.lastName}`}</h2>
              </div>
              <h2 className="friend-nbr">{e.FriendList.length} friends</h2>

              {!e.FriendList.includes(user._id) ? (
                <Button
                  style={btnStyle}
                  onClick={() =>
                    dispatch(
                      addInvitaion({ sender: user._id, receiver: e._id })
                    )
                  }
                >
                  Add
                </Button>
              ) : (
                <Button style={btnStyle} disalble={true}>
                  friend
                </Button>
              )}
            </div>
          ))
      ) : (
        <h2>no users</h2>
      )}
    </div>
  );
};

export default Search;
