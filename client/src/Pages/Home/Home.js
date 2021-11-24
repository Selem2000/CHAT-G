import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, updatePost } from "../../Redux/actions/post";
import Errors from "../../Components/Errors/Error";
import Load from "../../Components/Load/Load";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./Home.css";
import BackgroundLetterAvatars from "../../Components/Avatar/BackgroundLetterAvatars";

const Home = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const load = useSelector((state) => state.postReducer.load);
  const errors = useSelector((state) => state.postReducer.errors);
  const users = useSelector((state) => state.userReducer.users);
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="home">
      {load ? (
        <Load />
      ) : errors.length ? (
        errors.map((err) => <Errors error={err} />)
      ) : posts.length ? (
        posts.map((post) => (
          <div className="post" key={post._id}>
            <div className="header">
              <BackgroundLetterAvatars
                firstName={post.author.firstName}
                lastName={post.author.lastName}
              />
              <h2 className="author">{`${post.author.firstName} ${post.author.lastName}`}</h2>
            </div>
            <div className="content">
              <p className="post-content">{post.contents}</p>
            </div>
            <div className="footer">
              <b>
                {post.likes.length}
                <FavoriteBorderIcon />
              </b>
            </div>
          </div>
        ))
      ) : (
        <h2>no posts</h2>
      )}
    </div>
  );
};

export default Home;
