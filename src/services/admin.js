import axios from "axios";

const baseUrl = "/api/admins";

const postAdmin = async (data) => await axios.post(baseUrl, data);

const adminService = {
  postAdmin,
};

export default adminService;
