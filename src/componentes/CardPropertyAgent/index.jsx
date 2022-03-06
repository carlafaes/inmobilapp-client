import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";

import { getRandomArbitrary } from "../../utils/colorRandom";
import propertyService from "../../services/property";
import { notifyError, notifySuccess } from "../../utils/notifications";

export default function CardPropertyAgent({
  images,
  state,
  id,
  clientsID,
  ...d
}) {
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
      <CardMedia
        component="img"
        all={state}
        image={images[getRandomArbitrary(0, images.length)]}
      />
    </Card>
  );
}
