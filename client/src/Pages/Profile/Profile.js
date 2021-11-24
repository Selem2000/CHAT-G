import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import female from "../../photo/female.jpg";
import male from "../../photo/male.jpg";
import ModalBio from "./Modal/ModalBio";
import { current } from "../../Redux/actions/user";
import { Slide } from "@mui/material";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const load = useSelector((state) => state.userReducer.load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <div className="profile">
      {load ? (
        <h2>load</h2>
      ) : (
        <>
          {" "}
          <Slide
            direction="down"
            in={true}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="left-side">
              <img
                className="photo-profile"
                width="280px"
                alt="avatar"
                src={user && user.sexe === "female" ? female : male}
              />
              <h2 className="name">{`${user && user.firstName} ${
                user && user.lastName
              }`}</h2>
              <p className="bio">{user && user.bio}</p>

              <ModalBio user={user} />
            </div>
          </Slide>
          <Slide
            direction="right"
            in={true}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="right-side">
              <h3 className="sexe">{`sexe : ${user && user.sexe}`}</h3>
              <h2 className="email">email :{user && user.email}</h2>
              <h3 className="friends-number">{`${
                user && user.FriendList && user.FriendList.length
              } friends`}</h3>
            </div>
          </Slide>
        </>
      )}
    </div>
  );
};

export default Profile;
