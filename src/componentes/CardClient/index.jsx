import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  Button,
} from "@mui/material";
import { getColorRamdom } from "../../utils/colorRandom";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import { notifyError, notifySuccess } from "../../utils/notifications";

import clientService from "../../services/client";
import { sendFechaPago } from "../../templates/FechaPago";

export default function CardClient({ name, id, token, payDay, email }) {
  const deleteClient = (id, token) => {
    swal({
      title: "Eliminar Cliente!",
      text: "Esta seguro que sea eliminar este cliente!",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((op) => {
      if (op) {
        clientService
          .deleteClientID(id, token)
          .then(() => {
            notifySuccess("Cliente eliminado correctamente!");
          })
          .catch(() => {
            notifyError("No se puede eliminar este cliente!");
          });
      }
    });
  };

  const pagoConAnticipacion = (fechaPago) => {
    let fechaActual = new Date();
    fechaActual = `${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}`;

    fechaActual = fechaActual.split("/").map((d) => parseInt(d));
    fechaPago = fechaPago.split("/").map((d) => parseInt(d));
    fechaPago[0] += 3;

    if (fechaActual[0] >= fechaPago[0] || fechaActual[1] >= fechaPago[1])
      return true;
    return false;
  };

  const sendEmail = (name, email, payDay) => {
    sendFechaPago(name, email, payDay)
      .then(() => {
        swal("Notificacion enviada!", {
          icon: "success",
        });
      })
      .catch(() => {
        notifyError("Servicio no disponible!");
      });
  };

  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          title={name}
          avatar={<Avatar sx={{ bgcolor: getColorRamdom() }}>{name[0]}</Avatar>}
          subheader={`ID: ${id}`}
          action={
            <IconButton
              aria-label="Eliminar"
              onClick={() => deleteClient(id, token)}
            >
              <DeleteIcon />
            </IconButton>
          }
        />

        <CardActions>
          {!pagoConAnticipacion(payDay) && (
            <Button
              onClick={() =>
                sendEmail(name, "garcianaranjodairo@gmail.com", payDay)
              }
            >
              notificar pago
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
