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
import { useNavigate } from "react-router-dom";
import { logaoutCurrentUserForLocalStorage } from "../../utils/user";

import classes from "./PutAdmin.module.css";

export default function PutAdmin({ openCloseModal, admin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({ ...admin, password: "", password1: "" });
  const navigate = useNavigate();

  const [error, setError] = useState({
    name: null,
    password: "*",
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
          const { dni, password1, agentsID, token, ...newAdmin } = input;
          adminService.putAdminID(input.id, newAdmin, token).then(() => {
            swal("Tus datos, han sido actualizados!", {
              icon: "success",
            });
            openCloseModal();
            logaoutCurrentUserForLocalStorage();
            navigate("/");
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
          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              color={error.password ? "error" : "success"}
              htmlFor="password"
              required
            >
              {error.password && error.password === "*"
                ? "Nueva Contraseña"
                : error.password
                ? error.password
                : "Nueva Contraseña"}
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
                  ? "Nueva Contraseña"
                  : error.password
                  ? error.password
                  : "Nueva Contraseña"
              }
              color={error.password ? "error" : "success"}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              color={error.password ? "error" : "success"}
              htmlFor="password1"
              required
            >
              {error.password && error.password === "*"
                ? "Repita Contraseña"
                : error.password
                ? error.password
                : "Repita Contraseña"}
            </InputLabel>
            <OutlinedInput
              required
              id="password1"
              type={showPassword ? "text" : "password"}
              value={input.password1}
              name="password1"
              onChange={handleChange}
              label={
                error.password && error.password === "*"
                  ? "Repita Contraseña"
                  : error.password
                  ? error.password
                  : "Repita Contraseña"
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
