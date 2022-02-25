import axios from "axios";

const baseUrl = "/api/agents";

const getAgentID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

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
const agentService = {
  getAgentID,
  deleteAgentID,
  putAgentID,
};

export default agentService;
