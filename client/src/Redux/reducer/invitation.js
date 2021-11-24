import {
  FAILD_INVITATION,
  GET_ALL_INVITATION,
  LOAD_INVITATION,
} from "../constants/invitation";

const initialState = {
  invitations: [],
  load: false,
  errors: [],
};

const invitationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_INVITATION:
      return { ...state, load: true };
    case FAILD_INVITATION:
      return { ...state, errors: payload, load: false };
    case GET_ALL_INVITATION:
      return { ...state, invitations: payload.invitations, load: false };
    case "VIDE_ERRORS":
      return { ...state, errors: [] };
    default:
      return state;
  }
};

export default invitationReducer;
