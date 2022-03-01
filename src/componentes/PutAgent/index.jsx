import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isDone, validatePutAgent } from "../../utils/errorsFormAdmin";
import agentService from "../../services/agent";
import swal from "sweetalert";
import { notifyError } from "../../utils/notifications";
import { Box, Stack, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getUserForLocalStorage } from "../../utils/user";
import classes from "./PutAgent.module.css";
import adminService from "../../services/admin";

export default function PutAgent({ agent, handleOpenOnClouseModal }) {
  const [input, setInput] = useState({ ...agent });

  const [error, setError] = useState({
    name: null,
    phone: null,
    address: null,
    age: null,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validatePutAgent(
        {
          ...input,
          [e.target.name]: e.target.value,
        },
        error,
        e.target.name
      )
    );
  };

  const handleSubmit = (e) => {
    if (isDone(error)) {
      swal({
        title: "Estas seguro?",
        text: "Que deseas editar estos datos!",
        icon: "warning",
        buttons: ["No", "Si"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          const { token } = getUserForLocalStorage();
          const { id, dni, ...updateAgent } = input;
          agentService.putAgentID(id, updateAgent, token).then(() => {
            swal("Datos del agente editados correctamente! Recarga tu Pagina!", {
              icon: "success",
            });
            handleOpenOnClouseModal();
          });
        }
      });
    } else {
      notifyError("Completa correctamente los datos!");
    }
  };

  return (
    <Box component="form" autoComplete="off">
      <div className={classes.conten}>
        <Stack direction="row" spacing={2} className={classes.item}>
          <TextField
            required
            label={
              error.name && error.name === "*"
                ? "Nombre"
                : error.name
                ? error.name
                : "Nombre"
            }
            value={input.name}
            name="name"
            onChange={handleChange}
            color={error.name ? "error" : "success"}
            sx={{ width: "100%" }}
          />
          <TextField
            required
            label={
              error.age && error.age === "*"
                ? "Edad"
                : error.age
                ? error.age
                : "Edad"
            }
            type="number"
            value={input.age}
            name="age"
            onChange={handleChange}
            color={error.age ? "error" : "success"}
            sx={{ width: "150px" }}
          />
        </Stack>
        <Stack direction="row" spacing={2} className={classes.item}>
          <TextField
            label={
              error.phone && error.phone === "*"
                ? "Celular"
                : error.phone
                ? error.phone
                : "Celular"
            }
            type="tel"
            value={input.phone}
            name="phone"
            sx={{ width: "100%" }}
            onChange={handleChange}
            color={error.phone ? "error" : "success"}
          />
          <TextField
            label={
              error.address && error.address === "*"
                ? "Direccion"
                : error.address
                ? error.address
                : "Direccion"
            }
            type="text"
            sx={{ width: "100%" }}
            value={input.address}
            name="address"
            onChange={handleChange}
            color={error.address ? "error" : "success"}
          />
        </Stack>
        <Stack
          direction="row"
          alignContent="center"
          spacing={6}
          className={classes.item}
        >
          <Button
            variant="outlined"
            onClick={handleSubmit}
            endIcon={<SendIcon />}
            sx={{ color: "#0d0d0d" }}
          >
            Enviar
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
