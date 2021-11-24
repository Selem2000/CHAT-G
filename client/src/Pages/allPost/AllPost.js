import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, deletePost } from "../../Redux/actions/post";
import { getAllUsers, deleteUser } from "../../Redux/actions/user";
import DeleteIcon from "@mui/icons-material/Delete";
import BackgroundLetterAvatars from "../../Components/Avatar/BackgroundLetterAvatars";

const AllPost = () => {
  const users = useSelector((state) => state.userReducer.users);
  const posts = useSelector((state) => state.postReducer.posts);
  const load = useSelector((state) => state.postReducer.load);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="user-post-list">
      {load ? (
        <h3>Load </h3>
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
              <div className="btn-post">
                <DeleteIcon
                  style={{ cursor: "pointer", color: "#DA0037" }}
                  onClick={() => dispatch(deletePost(post._id))}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>no posts</h2>
      )}
    </div>
  );
};

export default AllPost;
