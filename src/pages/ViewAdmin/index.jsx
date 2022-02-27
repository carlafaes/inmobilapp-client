import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../componentes/Loading";
import adminService from "../../services/admin";
import agentService from "../../services/agent";
import { setAdmin } from "../../redux/actions/actions-admin";
import { setAgent } from "../../redux/actions/actions-agent";
import CardAgent from "../../componentes/CardAgent";
import PutAgent from "../../componentes/PutAgent";
import NavBarAdmin from "../../componentes/NavBarAdmin";
import swal from "sweetalert";
import { notifyWelcome } from "../../utils/notifications";
import { Grid } from "@mui/material";

import {
  getUserForLocalStorage,
  logaoutCurrentUserForLocalStorage,
} from "../../utils/user";

import styled from "./ViewAdmin.module.css";

export default function ViewAdmin() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const userLocal = getUserForLocalStorage();
    if (userLocal && userLocal.role === "ADMIN") {
      adminService.getAdminIdAgentDetails(userLocal.id).then((data) => {
        setUser({ ...data, token: userLocal.token });
        notifyWelcome(`Bienvenido ${data.name}!`);
      });
    } else {
      swal("Tienes que estar logueado como administrador!", {
        icon: "warning",
      });
      navigate("/login");
    }
  }, []);

  if (!user.hasOwnProperty("id")) {
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
          setUser({ ...data, token: user.token });
        });
      })
      .catch(() => {
        alert("No se puede eliminar este agente, ya que tiene una propiedad!");
      });
  };

  const { agentsID } = user;

  return (
    <>
      <NavBarAdmin
        user={user}
        token={user.token}
        deleteCurrentAdminID={deleteCurrentAdminID}
      />
      <div className={styled.container}>
        <Grid container spacing={2}>
          {agentsID.map((agent) => (
            <CardAgent
              key={agent.id}
              agent={agent}
              editAgent={editAgent}
              deleteAgent={deleteAgent}
            />
          ))}
        </Grid>
        <PutAgent id={user.id} />
      </div>
    </>
  );
}
