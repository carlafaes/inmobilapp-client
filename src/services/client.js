import axios from "axios";

const updateInfo = async (infoToUpdate, clientID, token) => {
  const URL = `http://localhost:3001/api/clients/${clientID}`;
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

export default updateInfo;
