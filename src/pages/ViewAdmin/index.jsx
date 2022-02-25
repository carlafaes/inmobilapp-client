import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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

import { getUserForLocalStorage } from "../../utils/user";

import styled from "./ViewAdmin.module.css";

export default function ViewAdmin() {
  const adminDetailsAgents = useSelector(
    (state) => state.reducerAdmin.adminDetailsAgents
  );
  const dispatch = useDispatch();

  const user = getUserForLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("tienes que estar logueado para usar esta vista");
      navigate("/login");
    } else {
      adminService.getAdminIdAgentDetails(user.id).then((data) => {
        dispatch(setAdminDetailsAgents(data));
      });
    }
  }, []);

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

  const deleteAgent = (id) => {
    agentService
      .deleteAgentID(id, user.token)
      .then(() => {
        alert("Eliminado");
        adminService.getAdminIdAgentDetails(user.id).then((data) => {
          dispatch(setAdminDetailsAgents(data));
        });
      })
      .catch(() => {
        alert("No se puede eliminar este agente, ya que tiene una propiedad!");
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
          <li>
            <button
              onClick={() => {
                if (confirm("Seguro desea salir?")) {
                  localStorage.removeItem("loggedUser");
                  navigate("/");
                }
              }}
            >
              Salir
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
            deleteAgent={deleteAgent}
          />
        ))}
        <PutAgent id={user.id} />
      </article>
      <Footer />
    </div>
  );
}
