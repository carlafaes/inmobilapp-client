import axios from "axios";

const baseUrl = "/api/admins";

const postAdmin = async (data) => {
  return await axios.post(baseUrl, data);
};

const getAdminIdAgentDetails = async (id) =>
  (await axios.get(`${baseUrl}/${id}?detailsAgent=true`)).data;

const getAdminID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const putAdminID = async (id, admin, token) =>
  (
    await axios.put(`${baseUrl}/${id}`, admin, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data;

const deleteAdminID = async (id, token) =>
  await axios.delete(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const adminService = {
  postAdmin,
  getAdminIdAgentDetails,
  getAdminID,
  putAdminID,
  deleteAdminID,
};

export default adminService;
