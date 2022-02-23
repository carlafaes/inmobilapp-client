import {
  SET_ALL_PROPERTIES,
  GET_ALL_PROPERTIES,
  FILTERED_PROPERTIES,
} from "../actions/actionsProperties";

const initialState = {
  allProperties: [],
  filteredProperties: [],
};

const reducerProperties = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PROPERTIES:
      return {
        ...state,
        allProperties: payload,
        filteredProperties: payload,
      };

    case GET_ALL_PROPERTIES:
      return {
        ...state,
        filteredProperties: state.allProperties,
      };

    case FILTERED_PROPERTIES:
      return {
        ...state,
        filteredProperties: state.allProperties,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducerProperties;
