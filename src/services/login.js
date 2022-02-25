import axios from "axios";
const URL = "http://localhost:3001/api/login";

const login = async (credentials) => {
  const { data } = await axios.post(URL, credentials);
  return data;
};

export default { login };
