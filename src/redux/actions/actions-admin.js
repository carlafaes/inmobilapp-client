export const SET_ADMIN_DETAILS_AGENT = "SET_ADMIN_DETAILS_AGENT";
export const SET_ADMIN = "SET_ADMIN";

export const setAdminDetailsAgent = (data) => {
  return { type: SET_ADMIN_DETAILS_AGENT, payload: data };
};

export const setAdmin = (data) => {
  return { type: SET_ADMIN, payload: data };
};
