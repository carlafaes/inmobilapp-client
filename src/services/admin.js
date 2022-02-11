import axios from 'axios';

const baseUrl = '/api/admins';

const getAll = async () => (await axios.get(baseUrl)).data;

const adminService = {
  getAll,
};

export default adminService;
