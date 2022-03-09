import axios from "axios";

const baseUrl = "/api/agents";
const clientsBaseURL = "/api/clients";

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
  return (await axios.put(`${baseUrl}`, { agentID: id, ...agent }, config))
    .data;
};

const assignProperty = async (clientID, propertyID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.put(
    clientsBaseURL,
    {
      clientID,
      propertyID,
    },
    config
  ).data;
};

const delClientProperty = async (clientID, boolean, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return await axios.put(
    clientsBaseURL,
    { clientID, delPropertyID: boolean },
    config
  ).data;
};

const getAgentDetailsPropertiesID = async (id) =>
  (await axios.get(`${baseUrl}/${id}/?detailsProperties=true`)).data;

const agentService = {
  getAgentID,
  deleteAgentID,
  putAgentID,
  createAgent,
  getAgentDetailsPropertiesID,
  assignProperty,
  delClientProperty,
};

export default agentService;
