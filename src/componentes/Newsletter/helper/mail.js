import axios from "axios";

export const sendMail = ({ userEmail, userName }) => {
  return axios.post("/api/sendmail", { userEmail, userName });
};
