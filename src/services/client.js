import axios from 'axios';
import toast from 'react-hot-toast';
import { getUserForLocalStorage } from '../utils/user';

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
			toast.success('Information updated!', {
				icon: '🚀',
			});
		notify();

		return response.data;
	} catch (error) {
		const alertPassword = () => toast.error(error.message);
		alertPassword();
	}
};

const addFavoriteProperty = (favPropertyID) => {

	const { token } = getUserForLocalStorage();
	const URL = '/api/clients';

	return axios.put(
		URL,
		{ favPropertyID },
		{ headers: { Authorization: `Bearer ${token}` } }
	);
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
	addFavoriteProperty,
};

export default clientService;
