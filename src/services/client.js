import axios from "axios";

const updateInfo = async (infoToUpdate, token) => {
  const URL = `/api/clients`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(URL, infoToUpdate, config);
    const notify = () =>
      toast.success("Information updated!", {
        icon: "🚀",
      });

    return response.data;
  } catch (error) {
    const alertPassword = () => toast.error(error.message);
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
