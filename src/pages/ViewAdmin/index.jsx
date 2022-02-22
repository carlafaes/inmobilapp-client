import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsAgent from "../../componentes/CardsAgent";
import Loading from "../../componentes/Loading";
import adminService from "../../services/admin";

export default function ViewAdmin() {
  const [adminDetailsAgent, setAdminDetailsAgent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    adminService.getAdminIdAgentDetails(id).then((data) => {
      setAdminDetailsAgent(data);
    });
  }, [id]);

  if (Object.keys(adminDetailsAgent).length === 0) {
    return <Loading />;
  }

  const { name, agentsID } = adminDetailsAgent;

  return (
    <div>
      <nav>
        <ul>
          <li>{name}</li>
          <li>
            <button onClick={() => console.log("PutAdmin")}>PUT ADMIN</button>
          </li>
        </ul>
      </nav>
      <CardsAgent agents={agentsID} />
    </div>
  );
}
