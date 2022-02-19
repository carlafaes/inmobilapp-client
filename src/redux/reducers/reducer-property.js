import { GET_PROPERTY } from "../actions/constants";

const initialState = [];

const property = (state = initialState, action) => {
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
