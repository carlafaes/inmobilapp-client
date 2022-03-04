let currentTheme = "light";

export const getTheme = () => localStorage.getItem("themeApp") || currentTheme;

export const changeTheme = () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("themeApp", currentTheme);
};
