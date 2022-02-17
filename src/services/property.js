import axios from 'axios';

const baseUrl = '/api/properties';

const getAll = async () => (await axios.get(baseUrl)).data;

const propertyService = {
  getAll,
};

export default propertyService;
