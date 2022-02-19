import { GET_PROPERTY } from "../actions/constants";

const initialState = [];

const property = (state = initialState, action) => {
  /* action.payload = initialState */
  console.log(action.payload);
  console.log(action);
  switch (action.type) {
    case GET_PROPERTY:
      return {
        ...state,
        property: action.payload
      }
    default: return state;
  }
};

export default property;
