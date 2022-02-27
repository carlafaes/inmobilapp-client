import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";

import { Phone } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function CardAgent({ agent, deleteAgent, editAgent }) {
  const { name, phone, id } = agent;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ backgroundColor: "red" }}>{name[0]}</Avatar>}
        title={name}
        action={
          <IconButton onClick={() => deleteAgent(id)}>
            <DeleteIcon />
          </IconButton>
        }
        subheader={
          <div style={{ display: "flex", direction: "row" }}>
            <Phone />
            <Typography>{phone}</Typography>
          </div>
        }
      ></CardHeader>
      <CardActions>
        <IconButton onClick={() => editAgent(id)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
