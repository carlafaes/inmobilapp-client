import axios from "axios";
const URL = "/api/login";

const login = async (credentials) => {
  const { data } = await axios.post(URL, credentials);
  return data;
};

export default { login };
