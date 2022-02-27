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
  Modal,
} from "@mui/material";

import { ExpandLess, ExpandMore, Phone } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import PutAgent from "../PutAgent";

export default function CardAgent({ agent, deleteAgent }) {
  const { name, phone, id } = agent;
  const [open, setOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenOnClouseModal = () => setOpenModal(!openModal);

  const body = (
    <div
      style={{
        position: "absolute",
        borderRadius: "5px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        minHeight: 350,
      }}
    >
      <PutAgent agent={agent}  handleOpenOnClouseModal={handleOpenOnClouseModal} />
    </div>
  );

  const handleEditAgent = () => {
    handleOpenOnClouseModal();
  };

  return (
    <>
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
          <IconButton onClick={handleEditAgent}>
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
      <Modal open={openModal} onClose={handleOpenOnClouseModal}>
        {body}
      </Modal>
    </>
  );
}
