import React, { useEffect, useState } from "react";
import agentService from "../../services/agent";
import Loading from "../Loading";

export default function PutAgent({ id }) {
  const [agent, setAgent] = useState({});

  useEffect(() => {
    agentService.getAgentID(id).then((data) => {
      setAgent(agent);
    });
  }, [id]);

  if (Object.keys(agent).length === 0) {
    return <Loading />;
  }

  return <h1>{agent.name}</h1>;
}
