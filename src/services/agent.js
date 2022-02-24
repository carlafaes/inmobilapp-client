import axios from "axios";

const baseUrl = "/api/agents";

const getAgentID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const deleteAgentID = async (id) => await axios.delete(`${baseUrl}/${id}`);

const createAgent = async (agent) => await axios.post(`${baseUrl}`, agent);

const putAgentID = async (id, agent) =>
  (await axios.put(`${baseUrl}/${id}`, agent)).data;

const agentService = {
  getAgentID,
  deleteAgentID,
  putAgentID,
  createAgent,
};

export default agentService;
