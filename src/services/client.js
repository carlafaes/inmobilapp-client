import axios from "axios";

export const updateInfo = async (infoToUpdate, token) => {
  const URL = "/api/clients";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(URL, infoToUpdate, config);
    alert("Information updated");
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const getClientInfo = async (clientID) => {
  const URL = `/api/clients/${clientID}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    alert(error);
  }
};

const clientService = {
  getClientInfo,
  updateInfo,
};

export default clientService;
