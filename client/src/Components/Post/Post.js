import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BackgroundLetterAvatars from "../Avatar/BackgroundLetterAvatars";
import "./Post.css";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../Redux/actions/post";

const Post = ({ post, author }) => {
  const [newPost, setNewPost] = useState(post);
  const dispatch = useDispatch();

  post.likes.includes(author._id)
    ? setNewPost({
        ...newPost,
        likes: newPost.likes.filter((e) => e !== author._id),
      })
    : setNewPost({
        ...newPost,
        likes: [...newPost.likes, author._id],
      });
  return (
    <div className="post">
      <div className="header">
        <BackgroundLetterAvatars
          firstName={author.firstName}
          lastName={author.lastName}
        />
        <h2 className="author">{`${author.firstName} ${author.lastName}`}</h2>
      </div>
      <div className="content">
        <p className="post-content">{post.contents}</p>
      </div>
      <div className="footer">
        <b>
          {post.likes.length}{" "}
          <FavoriteBorderIcon
            onClick={() => {
              dispatch(updatePost(post._id, newPost));
            }}
          />
        </b>
        <div className="btn-post">
          <DeleteIcon onClick={() => dispatch(deletePost(post._id))} />
          <EditIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
