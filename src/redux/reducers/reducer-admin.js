import { SET_ADMIN, SET_ADMIN_DETAILS_AGENTS } from "../actions/actions-admin";

const initialState = {
  admin: null,
  adminDetailsAgents: null,
};

const reducerAdmin = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ADMIN:
      return {
        ...state,
        admin: payload,
      };
    case SET_ADMIN_DETAILS_AGENTS:
      return {
        ...state,
        adminDetailsAgents: payload,
      };

    default:
      return { ...state };
  }
};

export default reducerAdmin;
