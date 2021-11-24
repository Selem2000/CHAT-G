import { combineReducers } from "redux";
import userReducer from "./user";
import postReducer from "./post";
import invitationReducer from "./invitation";
const rootReducer = combineReducers({
  userReducer,
  postReducer,
  invitationReducer,
});
export default rootReducer;
