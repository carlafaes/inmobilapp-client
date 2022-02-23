import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
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
import Footer from "../../componentes/Footer";

import styled from "./ViewAdmin.module.css";

export default function ViewAdmin() {
  const adminDetailsAgents = useSelector(
    (state) => state.reducerAdmin.adminDetailsAgents
  );
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

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

  const deleteCurrentAdminID = async (id) => {
    if (confirm("Seguro que desea darse de baja?")) {
      await adminService.deleteAdminID(id);
      alert("Done!");
      navigate("/");
    }
  };

  const editAgent = (id) => {
    agentService.getAgentID(id).then((data) => {
      dispatch(setAgent(data));
    });
  };

  const { name, agentsID, permissions } = adminDetailsAgents;

  return (
    <div className={styled.container}>
      <nav>
        <ul>
          <li>{name}</li>
          <li>
            <button onClick={editAdmin}>Editar perfil</button>
          </li>
          <li>
            <button onClick={() => deleteCurrentAdminID(id)}>
              Eliminar perfil
            </button>
          </li>
        </ul>
      </nav>
      <article>
        <PutAdmin />
        {agentsID.map((agent) => (
          <CardAgent
            key={agent.id}
            agent={agent}
            crudAgent={permissions.crudAgent}
            editAgent={editAgent}
          />
        ))}
        <PutAgent id={id} />
      </article>
      <Footer />
    </div>
  );
}
