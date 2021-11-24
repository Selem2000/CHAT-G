import axios from "axios";
import {
  FAILD_POST,
  GET_ALL_POSTS,
  GET_POST,
  LOAD_POST,
} from "../constants/post";

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: LOAD_POST });
  try {
    const result = await axios.get("/api/post/");
    dispatch({ type: GET_ALL_POSTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILD_POST, payload: error.response.data.errors });
    console.log(error);
  }
};
export const getAllUserPost = (id) => async (dispatch) => {
  dispatch({ type: LOAD_POST });
  try {
    const result = await axios.get("/api/post/");
    dispatch({
      type: GET_ALL_POSTS,
      payload: result.data.posts.filter((e) => e.author === id),
    });
  } catch (error) {
    dispatch({ type: FAILD_POST, payload: error.response.data.errors });
  }
};
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: LOAD_POST });
  try {
    const result = await axios.get(`/api/post/${id}`);
    dispatch({ type: GET_POST, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILD_POST, payload: error.response.data.errors });
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/post/${id}`);
    dispatch(getAllPosts());
  } catch (error) {
    dispatch({ type: FAILD_POST, payload: error.response.data.errors });
  }
};
export const addPost = (post) => async (dispatch) => {
  try {
    await axios.post("/api/post/", post);
    dispatch(getAllPosts());
  } catch (error) {
    dispatch({ type: FAILD_POST, payload: error.response.data.errors });
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    await axios.put(`/api/post/${id}`, post);
    dispatch(getAllPosts());
  } catch (error) {
    dispatch({ type: FAILD_POST, payload: error.response.data.errors });
  }
};
