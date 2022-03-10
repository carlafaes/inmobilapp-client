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
import { Link } from "react-router-dom";

import propertyService from "../../services/property";
import { notifyError, notifySuccess } from "../../utils/notifications";

import clientService from "../../services/client";

export default function CardClient({ name, id, token }) {
  const deleteClient = (id, token) => {
    clientService.deleteClientID(id, token);
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

        <CardActions></CardActions>
      </Card>
    </div>
  );
}
