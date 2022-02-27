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
import NavBarAdmin from "../../componentes/NavBarAdmin";
import swal from "sweetalert";
import { notifyWelcome } from "../../utils/notifications";

import {
  getUserForLocalStorage,
  logaoutCurrentUserForLocalStorage,
} from "../../utils/user";

import styled from "./ViewAdmin.module.css";

export default function ViewAdmin() {
  const adminDetailsAgents = useSelector(
    (state) => state.reducerAdmin.adminDetailsAgents
  );
  const dispatch = useDispatch();

  const user = getUserForLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "ADMIN") {
      notifyWelcome(`Bienvenido ${user.name}!`);
      adminService.getAdminIdAgentDetails(user.id).then((data) => {
        dispatch(setAdminDetailsAgents(data));
      });
      adminService.getAdminID(user.id).then((data) => {
        dispatch(setAdmin(data));
      });
    } else {
      swal("Tienes que estar logueado como administrador!", {
        icon: "warning",
      });
      navigate("/login");
    }
  }, []);

  if (!adminDetailsAgents) {
    return <Loading />;
  }

  const deleteCurrentAdminID = (id, token) => {
    swal({
      title: "Estas seguro?",
      text: "Una vez borrado no podras recuperar tus datos!",
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        adminService.deleteAdminID(id, token).then(() => {
          logaoutCurrentUserForLocalStorage();
          swal("Cuenta administrador borrada!", {
            icon: "success",
          });
          navigate("/");
        });
      }
    });
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

  const { agentsID, permissions } = adminDetailsAgents;

  return (
    <>
      <NavBarAdmin
        user={adminDetailsAgents}
        token={user.token}
        deleteCurrentAdminID={deleteCurrentAdminID}
      />
      <div className={styled.container}>
        <article>
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
      </div>
      <Footer />
    </>
  );
}
