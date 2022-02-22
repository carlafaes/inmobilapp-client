import axios from 'axios';

const baseUrl = '/api/agents';

const getAll = async () => (await axios.get(baseUrl)).data;

const getAgentDetails = async (id) => (await axios.get(`${baseUrl}/${id}`)).data

const agentServices = {
    getAll,
    getAgentDetails
}

export default agentServices;