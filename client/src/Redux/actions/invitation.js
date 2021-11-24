import axios from "axios";
import {
  FAILD_INVITATION,
  GET_ALL_INVITATION,
  LOAD_INVITATION,
} from "../constants/invitation";

export const getAllInvitaions = () => async (dispatch) => {
  dispatch({ type: LOAD_INVITATION });
  try {
    const result = await axios.get("api/invitation/");
    dispatch({ type: GET_ALL_INVITATION, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILD_INVITATION, payload: error.response.data.errors });
  }
};
export const deleteInvitaion = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/invitation/${id}`);
    dispatch(getAllInvitaions());
  } catch (error) {
    dispatch({ type: FAILD_INVITATION, payload: error.response.data.errors });
  }
};
export const addInvitaion = (Invitaion) => async (dispatch) => {
  try {
    await axios.post("/api/invitation/", Invitaion);
    dispatch(getAllInvitaions());
  } catch (error) {
    dispatch({ type: FAILD_INVITATION, payload: error.response.data.errors });
  }
};
