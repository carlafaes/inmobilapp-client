export const SET_ADMIN_DETAILS_AGENTS = "SET_ADMIN_DETAILS_AGENTS";
export const SET_ADMIN = "SET_ADMIN";

export const setAdminDetailsAgents = (data) => {
  return { type: SET_ADMIN_DETAILS_AGENTS, payload: data };
};

export const setAdmin = (data) => {
  return { type: SET_ADMIN, payload: data };
};
