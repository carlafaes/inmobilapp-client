export const setTheme = (theme) => {
  localStorage.setItem("themeApp", theme);
};

export const getTheme = () => localStorage.getItem("themeApp");
