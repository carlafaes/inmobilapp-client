import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import propertyService from "../../services/property";
import { notifyError, notifySuccess } from "../../utils/notifications";

export default function CardPropertyAgent({ images, state, id, clientsID }) {
  const deleteProperty = () => {
    swal({
      title: "Eliminar Propiedad!",
      text: "Esta seguro que desea eliminar esta propiedad?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((op) => {
      if (op) {
        if (clientsID.length === 0) {
          propertyService
            .deletePropertyID(id)
            .then(() => {
              notifySuccess("Propiedad eliminada!");
            })
            .catch(() => {
              notifyError("No se puede eliminar esta propiedad!");
            });
        } else {
          notifyError(
            "No se puede eliminar esta propiedad!, ya que esta en uso!"
          );
        }
      }
    });
  };

  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor:
                  state === "available"
                    ? "#21f600"
                    : state === "reserved"
                    ? "#2000ad"
                    : "#ba0001",
              }}
            >
              {state === "available" ? "D" : state === "reserved" ? "R" : "O"}
            </Avatar>
          }
          action={
            <IconButton aria-label="Eliminar" onClick={deleteProperty}>
              <DeleteIcon />
            </IconButton>
          }
          title={
            state === "available"
              ? "Disponible"
              : state === "reserved"
              ? "Reservada"
              : "Ocupada"
          }
          subheader={`ID: ${id}`}
        />
        <CardActions>
            <Link to={`/property/${id}`}>
              Ver detalles
            </Link>
        </CardActions>
      </Card>
    </div>
  );
}
