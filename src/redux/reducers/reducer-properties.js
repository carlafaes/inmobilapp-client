import {
  SET_ALL_PROPERTIES,
  GET_ALL_PROPERTIES,
  FILTERED_PROPERTIES,
} from "../actions/actionsProperties";

const initialState = {
  allProperties: [],
  filteredProperties: [],
};

const toLower = (str) => {
  return str.toLowerCase();
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
        filteredProperties: state.allProperties.filter((property) => {
          return (
            toLower(property.location.city).includes(toLower(payload.city)) ||
            toLower(property.location.address).includes(
              toLower(payload.address)
            )
          );
        }),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducerProperties;
