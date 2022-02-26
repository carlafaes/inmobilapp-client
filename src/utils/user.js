export const getUserForLocalStorage = () => {
  return JSON.parse(localStorage.getItem("loggedUser"));
};

export const logaoutCurrentUserForLocalStorage = () => {
  localStorage.removeItem("loggedUser");
};
