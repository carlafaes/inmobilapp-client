import axios from "axios";

const baseUrl = "/api/agents";

const getAgentID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const deleteAgentID = async (id) => await axios.delete(`${baseUrl}/${id}`);

const agentService = {
  getAgentID,
  deleteAgentID,
};

export default agentService;
