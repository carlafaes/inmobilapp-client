import axios from "axios";

const baseUrl = "/api/admins";

const postAdmin = async (data) => await axios.post(baseUrl, data);

const getAdminIdAgentDetails = async (id) =>
  (await axios.get(`${baseUrl}/${id}?detailsAgent=true`)).data;

const getAdminID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const adminService = {
  postAdmin,
  getAdminIdAgentDetails,
  getAdminID,
};

export default adminService;
