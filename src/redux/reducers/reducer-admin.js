import { SET_ADMIN } from "../actions/actions-admin";

const initialState = {
  admin: null,
};

const reducerAdmin = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ADMIN:
      return {
        ...state,
        admin: payload,
      };

    default:
      return { ...state };
  }
};

export default reducerAdmin;
