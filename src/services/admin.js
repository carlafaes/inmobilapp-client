import axios from "axios";

const baseUrl = "/api/admins";

const postAdmin = async (data) => await axios.post(baseUrl, data);

const getAdminIdAgentDetails = async (id) =>
  (await axios.get(`${baseUrl}/${id}?detailsAgent=true`)).data;

const getAdminID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const putAdminID = async (id, admin) =>
  (await axios.put(`${baseUrl}/${id}`, admin)).data;

const adminService = {
  postAdmin,
  getAdminIdAgentDetails,
  getAdminID,
  putAdminID,
};

export default adminService;
