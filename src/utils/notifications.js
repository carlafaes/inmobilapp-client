import { toast } from "react-toastify";

export const notifyError = (msg) =>
  toast.error(msg, {
    theme: "light",
  });

export const notifySuccess = (msg) =>
  toast.success(msg, {
    icon: "🚀",
    theme: "light",
  });

export const notifyWelcome = (msg) => {
  return toast.success(msg, {
    icon: "👋",
    theme: "light",
  });
};
