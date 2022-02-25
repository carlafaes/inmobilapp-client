export const getUserForLocalStorage = () => {
  return JSON.parse(localStorage.getItem("loggedUser"));
};
