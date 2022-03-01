import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../componentes/Loading";
import adminService from "../../services/admin";
import agentService from "../../services/agent";
import CardAgent from "../../componentes/CardAgent";
import NavBarAdmin from "../../componentes/NavBarAdmin";
import swal from "sweetalert";
import { notifyWelcome } from "../../utils/notifications";
import { Grid } from "@mui/material";
import { setAdminDetailsAgents } from "../../redux/actions/actions-admin";
import Footer from "../../componentes/Footer";

import {
  getUserForLocalStorage,
  logaoutCurrentUserForLocalStorage,
} from "../../utils/user";

import styled from "./ViewAdmin.module.css";

export default function ViewAdmin() {
  const user = useSelector((state) => state.reducerAdmin.adminDetailsAgents);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userLocal = getUserForLocalStorage();

  useEffect(() => {
    if (userLocal && userLocal.role === "ADMIN") {
      adminService.getAdminIdAgentDetails(userLocal.id).then((data) => {
        dispatch(setAdminDetailsAgents({ ...data, token: userLocal.token }));
        notifyWelcome(`Bienvenido ${data.name}!`);
      });
    } else {
      swal("Tienes que estar logueado como administrador!", {
        icon: "warning",
      });
      navigate("/login");
    }
  }, []);

  if (!user) {
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

  const deleteAgent = (id) => {
    swal({
      title: "Estas seguro?",
      text: "Que deseas eliminar este agente?",
      icon: "warning",
      buttons: ["No", "Si"],
      dangerMode: true,
    }).then((confir) => {
      if (confir) {
        agentService.deleteAgentID(id, user.token).then(() => {
          swal("Eliminado", {
            icon: "success",
          });
          adminService.getAdminIdAgentDetails(userLocal.id).then((data) => {
            dispatch(
              setAdminDetailsAgents({ ...data, token: userLocal.token })
            );
          });
        });
      }
    });
  };

  const { agentsID } = user;

  return (
    <>
      <NavBarAdmin user={user} deleteCurrentAdminID={deleteCurrentAdminID} />
      <div className={styled.container}>
        <Grid container className={styled.cards}>
          {agentsID?.map((agent) => (
            <CardAgent
              key={agent.id}
              agent={agent}
              deleteAgent={deleteAgent}
            />
          ))}
        </Grid>
      </div>
      <Footer/>
    </>
  );
}
