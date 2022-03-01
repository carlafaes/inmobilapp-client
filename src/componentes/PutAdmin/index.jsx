import React, { useState } from "react";
import { isDone, validatePutAdmin } from "../../utils/errorsFormAdmin";
import adminService from "../../services/admin";
import swal from "sweetalert";
import { notifyError } from "../../utils/notifications";
import {
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import SendIcon from "@mui/icons-material/Send";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import classes from "./PutAdmin.module.css";
import { useDispatch } from "react-redux";
import { setAdminDetailsAgents } from "../../redux/actions/actions-admin";

export default function PutAdmin({ openCloseModal, admin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    ...admin,
    password: "",
    newPassword: "",
  });
  const dispatch = useDispatch();

  const [error, setError] = useState({
    name: null,
    password: null,
    phone: null,
    address: null,
    newPassword: null,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validatePutAdmin(
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
        title: "Seguro?",
        text: "Se aplicaran los cambios en su perfil!",
        icon: "warning",
        buttons: ["No", "Si"],
        dangerMode: true,
      }).then((editAdmin) => {
        if (editAdmin) {
          const { dni, agentsID, token, ...newAdmin } = input;
          adminService
            .putAdminID(input.id, newAdmin, token)
            .then((res) => {
              swal("Tus datos, han sido actualizados!", {
                icon: "success",
              });
              openCloseModal();
              adminService.getAdminIdAgentDetails(input.id).then((data) => {
                dispatch(setAdminDetailsAgents({ ...data, token: token }));
              });
            })
            .catch(() => {
              swal("Tu nueva contraseña, no coincide con la anterior!", {
                icon: "warning",
              });
              openCloseModal();
            });
        }
      });
    } else {
      notifyError("Completa correctamente los campos!");
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
        </Stack>
        <Stack direction="row" spacing={2} className={classes.item}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              color={error.password ? "error" : "success"}
              htmlFor="password"
              required
            >
              {error.password && error.password === "*"
                ? "Contraseña Anterior"
                : error.password
                ? error.password
                : "Contraseña Anterior"}
            </InputLabel>
            <OutlinedInput
              required
              id="password"
              type={showPassword ? "text" : "password"}
              value={input.password}
              name="password"
              onChange={handleChange}
              label={
                error.password && error.password === "*"
                  ? "Contraseña Anterior"
                  : error.password
                  ? error.password
                  : "Contraseña Anterior"
              }
              color={error.password ? "error" : "success"}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              color={error.newPassword ? "error" : "success"}
              htmlFor="newPassword"
              required
            >
              {error.newPassword && error.newPassword === "*"
                ? "Nueva Contraseña"
                : error.newPassword
                ? error.newPassword
                : "Nueva Contraseña"}
            </InputLabel>
            <OutlinedInput
              required
              id="newPassword"
              type={showPassword ? "text" : "password"}
              value={input.password1}
              name="newPassword"
              onChange={handleChange}
              label={
                error.newPassword && error.newPassword === "*"
                  ? "Nueva Contraseña"
                  : error.newPassword
                  ? error.newPassword
                  : "Nueva Contraseña"
              }
              color={error.password ? "error" : "success"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2} className={classes.item}>
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
