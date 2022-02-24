import {
  SET_ALL_PROPERTIES,
  GET_ALL_PROPERTIES,
  FILTERED_PROPERTIES,
} from "../actions/actionsProperties";

const toLower = (str) => {
  return str.toLowerCase();
};

const isInRange = (value, a, b) => {
  return value >= a && value <= b;
};

const isState = (propertyState, payloadState) => {
  if (payloadState === "all") return true;
  return propertyState === payloadState;
};

const isType = (typeProper, payloadType) => {
  if (payloadType === "all") return true;
  return typeProper === payloadType;
};

const isIn = (property, payload) => {
  return (
    toLower(property.location.city).includes(toLower(payload.city)) &&
    toLower(property.location.neighborhood).includes(
      toLower(payload.neighborhood)
    ) &&
    toLower(property.location.address).includes(toLower(payload.address)) &&
    isInRange(property.details.area, payload.area[0], payload.area[1]) &&
    isInRange(property.details.rooms, payload.rooms[0], payload.rooms[1]) &&
    isInRange(
      property.rentalPrice,
      payload.rentalPrice[0],
      payload.rentalPrice[1]
    ) &&
    isState(property.state, payload.state) &&
    isType(property.typeProperty, payload.typeProperty)
  );
};

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
        filteredProperties: state.allProperties.filter((property) =>
          isIn(property, payload)
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducerProperties;
