import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsAgent from "../../componentes/CardsAgent";
import Loading from "../../componentes/Loading";
import PutAdmin from "../../componentes/PutAdmin";
import adminService from "../../services/admin";
import agentService from "../../services/agent";

export default function ViewAdmin() {
  const [adminDetailsAgent, setAdminDetailsAgent] = useState({});
  const [admin, setAdmin] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    adminService.getAdminIdAgentDetails(id).then((data) => {
      setAdminDetailsAgent(data);
    });
  }, [id]);

  if (Object.keys(adminDetailsAgent).length === 0) {
    return <Loading />;
  }

  const deleteAgent = async (id) => {
    await agentService.deleteAgentID(id);
    setAdminDetailsAgent({
      ...adminDetailsAgent,
      agentsID: adminDetailsAgent.agentsID.filter((agent) => agent.id !== id),
    });
  };

  const editAdmin = () => {
    adminService.getAdminID(id).then((data) => {
      setAdmin(data);
    });
  };

  const { name, agentsID, permissions } = adminDetailsAgent;

  return (
    <div>
      <nav>
        <ul>
          <li>{name}</li>
          <li>
            <button onClick={editAdmin}>Editar perfil</button>
          </li>
        </ul>
      </nav>
      <PutAdmin />
      <CardsAgent
        agents={agentsID}
        crudAgent={permissions.crudAgent}
        deleteAgent={deleteAgent}
      />
    </div>
  );
}
