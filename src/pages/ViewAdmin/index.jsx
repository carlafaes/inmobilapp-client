import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../componentes/Loading";
import PutAdmin from "../../componentes/PutAdmin";
import adminService from "../../services/admin";
import agentService from "../../services/agent";
import {
  setAdmin,
  setAdminDetailsAgents,
} from "../../redux/actions/actions-admin";
import { setAgent } from "../../redux/actions/actions-agent";
import { useSelector } from "react-redux";
import CardAgent from "../../componentes/CardAgent";
import PutAgent from "../../componentes/PutAgent";

export default function ViewAdmin() {
  const adminDetailsAgents = useSelector(
    (state) => state.reducerAdmin.adminDetailsAgents
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    adminService.getAdminIdAgentDetails(id).then((data) => {
      dispatch(setAdminDetailsAgents(data));
    });
  }, [id]);

  if (!adminDetailsAgents) {
    return <Loading />;
  }

  const editAdmin = () => {
    adminService.getAdminID(id).then((data) => {
      dispatch(setAdmin(data));
    });
  };

  const editAgent = (id) => {
    agentService.getAgentID(id).then((data) => {
      dispatch(setAgent(data));
    });
  };

  const { name, agentsID, permissions } = adminDetailsAgents;

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
      <article>
        {agentsID.map((agent) => (
          <CardAgent
            key={agent.id}
            agent={agent}
            crudAgent={permissions.crudAgent}
            editAgent={editAgent}
          />
        ))}
        <PutAgent />
      </article>
    </div>
  );
}
