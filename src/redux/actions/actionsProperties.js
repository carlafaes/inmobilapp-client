export const SET_ALL_PROPERTIES = "SET_ALL_PROPERTIES";
export const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES";
export const FILTERED_PROPERTIES = "FILTERED_PROPERTIES";

export const setAllProperties = (data) => {
  return { type: SET_ALL_PROPERTIES, payload: data };
};

export const getAllProperties = () => {
  return { type: GET_ALL_PROPERTIES, payload: null };
};

export const setFilterProperties = (data) => {
  return { type: FILTERED_PROPERTIES, payload: data };
};
