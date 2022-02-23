import { SET_ALL_PROPERTIES } from "../actions/actionsProperties";

const initialState = {
  allProperties: [],
};

const reducerProperties = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PROPERTIES:
      return {
        ...state,
        allProperties: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducerProperties;
