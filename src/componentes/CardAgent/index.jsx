import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  IconButton,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import { ExpandLess, ExpandMore, Phone } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";

export default function CardAgent({ agent, deleteAgent, editAgent }) {
  const { name, phone, id } = agent;
  const [open, setOpen] = useState(true);

  return (
    <Card sx={{ width: 345 }}>
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
      <List sx={{ width: "100%", maxWidth: 345 }} component="nav">
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Propiedades">
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemText>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {agent.properties.map((prop) => (
              <ListItemButton>
                <Link to={`/property/${prop.id}`}>{prop.id}</Link>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Card>
  );
}
