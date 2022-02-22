import axios from "axios";

const baseUrl = "/api/agents";

const getAgentID = async (id) => (await axios.get(`${baseUrl}/${id}`)).data;

const agentService = {
  getAgentID,
};

export default agentService;
