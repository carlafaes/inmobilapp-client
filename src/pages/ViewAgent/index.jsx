import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import NotPermissions from "../../componentes/NotPermissions";
import NavBarAgent from "../../componentes/NavBarAgent";
import Loading from "../../componentes/Loading";
import Footer from "../../componentes/Footer";
import agentService from "../../services/agent";
import { getUserForLocalStorage } from "../../utils/user";
import { notifyWelcome } from "../../utils/notifications";

import classes from "./ViewAgent.module.css";
import PanelAgent from "../../componentes/PanelAgent";

export default function ViewAgent() {
  const navigate = useNavigate();
  const [agentDetail, setAgentDetail] = useState(null);

  useEffect(() => {
    const user = getUserForLocalStorage();
    if (user.role !== "AGENT") {
      return navigate("/");
    }
    agentService
      .getAgentDetailsPropertiesID(user.id)
      .then((data) => {
        setAgentDetail({ ...data, token: user.token });
        notifyWelcome(`Bienvenid@ ${user.name}!`);
      })
      .catch(() => {
        swal("Ha habido un problema al intentar acceder a tu Usuario!", {
          icon: "warning",
        });
      });
  }, []);

  if (!agentDetail) {
    return <Loading />;
  }

  const { permissions } = agentDetail;

  return (
    <div className={classes.container}>
      <NavBarAgent user={agentDetail} />
      {permissions.crudProperty ? <PanelAgent agent={agentDetail} /> : <NotPermissions />}
      <Footer />
    </div>
  );
}
