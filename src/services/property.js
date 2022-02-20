import axios from 'axios';

const baseUrl = '/api/properties';

const getAll = async () => (await axios.get(baseUrl)).data;

const getPropertyDetail = async (id) => (await axios.get(`${baseUrl}/${id}/?detailsAgent=true`)).data; 

const propertyService = {
  getAll,
  getPropertyDetail,
};

export default propertyService;
