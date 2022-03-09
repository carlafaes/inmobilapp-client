import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agentService from "../../services/agent";
import { getUserForLocalStorage } from "../../utils/user";
import swal from "sweetalert";
import { notifyWelcome } from "../../utils/notifications";
import "./assignProperty.css";
import NavBarAgent from "../../componentes/NavBarAgent";
import Footer from "../../componentes/Footer";
import Loading from "../../componentes/Loading";
import { useNavigate } from "react-router-dom";

export default function AssignProperty() {
  const { clientID, propertyID } = useParams();
  const [agentDetail, setAgentDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserForLocalStorage();
    if (user === null || user.role !== "AGENT") {
      swal("No tienes permisos");
      return navigate("/");
    }
    agentService.getAgentDetailsPropertiesID(user.id).then((data) => {
      setAgentDetail({ ...data, token: user.token });
      notifyWelcome(`Bienvenid@ ${user.name}!`);
    });
  }, []);

  const asignarPropiedad = () =>
    agentService
      .assignProperty(clientID, propertyID, agentDetail.token)
      .then(() => swal("Propiedad asignada exitosamente"))
      .catch(() => swal("Ha ocurrido un error :("));

  const eliminarPropiedad = () =>
    agentService
      .delClientProperty(clientID, true, agentDetail.token)
      .then(() => swal("Se eliminó la propiedad del cliente"))
      .catch(() => swal("Ha ocurrido un error :("));

  if (!agentDetail) {
    return <Loading />;
  }

  return (
    <div>
      <NavBarAgent user={agentDetail} />
      <p>
        {clientID}, {propertyID}
      </p>
      <button onClick={asignarPropiedad}>Asignar propiedad al cliente</button>
      <button onClick={eliminarPropiedad}>
        Eliminar propiedad del cliente
      </button>
      {/* <Footer /> */}
    </div>
  );
}
