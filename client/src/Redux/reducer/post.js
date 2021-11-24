import {
  FAILD_POST,
  GET_ALL_POSTS,
  GET_POST,
  LOAD_POST,
} from "../constants/post";

const initialState = {
  posts: [],
  post: {},
  load: false,
  errors: [],
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POST:
      return { ...state, load: true };

    case GET_ALL_POSTS:
      return { ...state, posts: payload.posts, load: false };
    case GET_POST:
      return { ...state, post: payload.post, load: false };
    case FAILD_POST:
      return { ...state, errors: payload, load: false };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default postReducer;
