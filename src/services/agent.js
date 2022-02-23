import axios from "axios";

const baseUrl = "/api/agents";

const getAgentID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const deleteAgentID = async (id) => await axios.delete(`${baseUrl}/${id}`);

const putAgentID = async (id, agent) =>
  (await axios.put(`${baseUrl}/${id}`, agent)).data;

const agentService = {
  getAgentID,
  deleteAgentID,
  putAgentID,
};

export default agentService;
