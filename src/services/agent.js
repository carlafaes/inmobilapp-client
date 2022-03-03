import axios from "axios";

const baseUrl = "/api/agents";

const getAgentID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const createAgent = async (agent) => await axios.post(`${baseUrl}`, agent);

const deleteAgentID = async (id, token) =>
  await axios.delete(`${baseUrl}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const putAgentID = async (id, agent, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (await axios.put(`${baseUrl}/${id}`, agent, config)).data;
};

const getAgentDetailsPropertiesID = async (id) =>
  (await axios.get(`${baseUrl}/${id}/?detailsProperties=true`)).data;

const agentService = {
  getAgentID,
  deleteAgentID,
  putAgentID,
  createAgent,
  getAgentDetailsPropertiesID,
};

export default agentService;
