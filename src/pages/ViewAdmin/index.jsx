import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CardsAgent from "../../componentes/CardsAgent";
import Loading from "../../componentes/Loading";
import PutAdmin from "../../componentes/PutAdmin";
import adminService from "../../services/admin";
import agentService from "../../services/agent";
import {
  setAdmin,
  setAdminDetailsAgents,
} from "../../redux/actions/actions-admin";
import { useSelector } from "react-redux";

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
      <CardsAgent agents={agentsID} crudAgent={permissions.crudAgent} />
    </div>
  );
}
