import axios from 'axios';

const baseUrl = '/api/properties';

const getAll = async () => (await axios.get(baseUrl)).data;

const getPropertyDetail = async (id) =>
	(await axios.get(`${baseUrl}/${id}/?detailsAgent=true&detailsReviews=true`))
		.data;

const createProperty = async (property) => {
	await axios.post(`${baseUrl}`, property);
};
const propertyService = {
	getAll,
	getPropertyDetail,
	createProperty,
};

const favoritoService = async (id) => {
	await axios.put(`${baseUrl}/${id}/favorito`);
};

export default propertyService;
