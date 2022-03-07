import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardActions,
  IconButton,
  Typography,
  Modal,
  CardContent,
} from "@mui/material";
import { Phone } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { GiPositionMarker } from "react-icons/gi";
import PutAgent from "../PutAgent";
import { getColorRamdom } from "../../utils/colorRandom";

export default function CardAgent({ agent, deleteAgent }) {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(getColorRamdom());

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
      <PutAgent
        agent={agent}
        handleOpenOnClouseModal={handleOpenOnClouseModal}
      />
    </div>
  );

  const { address, name, phone, id, permissions } = agent;

  const handleEditAgent = () => {
    handleOpenOnClouseModal();
  };

  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardHeader
          avatar={<Avatar sx={{ backgroundColor: color }}>{name[0]}</Avatar>}
          title={`${name}${
            !permissions.crudProperty ? ", (Sin Permisos)" : ""
          }`}
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
            <Typography>Editar</Typography>
          </IconButton>
        </CardActions>
        <CardContent sx={{ paddingTop: 0 }}>
          <div style={{ display: "flex", direction: "row" }}>
            <GiPositionMarker className="emoticon" />
            <Typography> {address}</Typography>
          </div>
        </CardContent>
      </Card>
      <Modal open={openModal} onClose={handleOpenOnClouseModal}>
        {body}
      </Modal>
    </>
  );
}
