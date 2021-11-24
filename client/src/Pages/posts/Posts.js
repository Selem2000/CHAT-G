import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import Errors from "../../Components/Errors/Error";
import Load from "../../Components/Load/Load";
import Post from "../../Components/Post/Post";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  getAllPosts,
  addPost,
  deletePost,
  updatePost,
} from "../../Redux/actions/post";
import "./posts.css";
import BackgroundLetterAvatars from "../../Components/Avatar/BackgroundLetterAvatars";
import { Button } from "@mui/material";

const Posts = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const load = useSelector((state) => state.postReducer.load);
  const errors = useSelector((state) => state.postReducer.errors);
  const user = useSelector((state) => state.userReducer.user);
  const [newPost, setNewPost] = useState({ author: user._id, contents: "" });
  const [editPost, setEditPost] = useState({ author: user._id, contents: "" });
  const [edit, setEdit] = useState(false);
  const [isLike, setIsLike] = useState(true);

  const dispatch = useDispatch();

  // const UserPosts = posts.filter((post) => post.author === user._id);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const verifyIsLike = (post) => {
    post.likes.find((e) => e === user._id) ? setIsLike(true) : setIsLike(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addPost(newPost));
    setNewPost({ ...newPost, contents: "" });
  };
  const btnStyle = { cursor: "pointer" };
  return (
    <div className="user-post-list">
      {load ? (
        <Load />
      ) : posts && posts.length ? (
        posts
          .filter((post) => post.author._id === user._id)
          .map((post) => (
            <div className="post" key={post._id}>
              <div className="header">
                <BackgroundLetterAvatars
                  firstName={post.author.firstName}
                  lastName={post.author.lastName}
                />
                <h2 className="author">{`${post.author.firstName} ${post.author.lastName}`}</h2>
              </div>
              <div className="content">
                {edit ? (
                  <>
                    <input
                      type="text"
                      className="edit-bar"
                      value={editPost.contents}
                      onChange={(e) =>
                        setEditPost({ ...editPost, contents: e.target.value })
                      }
                    />
                    <Button
                      onClick={() => {
                        dispatch(updatePost(post._id, editPost));
                        setEdit(false);
                      }}
                    >
                      Edit
                    </Button>
                  </>
                ) : (
                  <p className="post-content">{post.contents}</p>
                )}
              </div>
              <div className="footer">
                <b>
                  {post.likes.length}{" "}
                  <FavoriteIcon
                    onClick={() => {
                      verifyIsLike(post);
                      isLike
                        ? setEditPost({
                            ...editPost,
                            contents: post.contents,
                            likes: post.likes.filter((e) => e != user._id),
                          })
                        : setEditPost({
                            ...editPost,
                            likes: [...post.likes, user._id],
                          });

                      // dispatch(updatePost(post._id, editPost));
                    }}
                  />
                </b>
                <div className="btn-post" style={{ display: "flex" }}>
                  <DeleteIcon
                    style={{ ...btnStyle, color: "#DA0037" }}
                    onClick={() => dispatch(deletePost(post._id))}
                  />
                  <EditIcon
                    style={{ cursor: "pointer", color: "#0F3460" }}
                    onClick={() => {
                      setEditPost({ ...editPost, contents: post.contents });
                      setEdit(true);
                    }}
                  />
                </div>
              </div>
            </div>
          ))
      ) : (
        <h2>no posts</h2>
      )}
      <form className="add-post">
        <input
          type="text"
          className="post-bar"
          value={newPost.contents}
          onChange={(e) => setNewPost({ ...newPost, contents: e.target.value })}
        />
        <button onClick={handleClick} type="submit" className="subBtn">
          <AddCircleIcon />
        </button>
      </form>
    </div>
  );
};

export default Posts;
