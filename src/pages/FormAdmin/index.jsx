import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminService from "../../services/admin";
import { validateFormAdmin, isDone } from "../../utils/errorsFormAdmin";
import styled from "./FormAdmin.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import SendIcon from "@mui/icons-material/Send";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NavBar from "../../componentes/Navbar";
import { notifyError } from "../../utils/notifications";
import swal from "sweetalert";

export default function FormAdmin() {
  document.title = "InmobillApp | registrar admin";
  const initInput = {
    name: "",
    dni: "",
    address: "",
    phone: "",
    age: "1994-01-01",
    password: "",
    password1: "",
  };

  const navigate = useNavigate();
  const [input, setInput] = useState(initInput);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    name: "*",
    dni: "*",
    password: "*",
    phone: "*",
    address: "*",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(
      validateFormAdmin(
        { ...input, [e.target.name]: e.target.value },
        error,
        e.target.name
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDone(error)) {
      const { password1, ...newAdmin } = input;
      adminService
        .postAdmin(newAdmin)
        .then(() => {
          setInput(initInput);
          swal("Administrador registrado", {
            icon: "success",
          });
          navigate(`/login`);
        })
        .catch(() => {
          swal("Un administrador con ese DNI ya se encuentra registrado", {
            icon: "warning",
          });
          setInput(initInput);
          navigate(`/login`);
        });
    } else {
      notifyError("Completa correctamente los datos!");
    }
  };

  return (
    <>
      <NavBar />
      <Box component="form" autoComplete="off" className={styled.container}>
        <div className={styled.conten}>
          <h1 className={styled.title}>Registro</h1>
          <Stack direction="row" spacing={2} className={styled.item}>
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
            />

            <TextField
              required
              label={
                error.dni && error.dni === "*"
                  ? "DNI"
                  : error.dni
                  ? error.dni
                  : "DNI"
              }
              value={input.dni}
              name="dni"
              onChange={handleChange}
              color={error.dni ? "error" : "success"}
            />
            <input
              className={styled.date}
              type="date"
              name="age"
              value={input.age}
              onChange={handleChange}
            ></input>
          </Stack>
          <Stack direction="row" spacing={2} className={styled.item}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel
                color={error.password ? "error" : "success"}
                htmlFor="password"
                required
              >
                {error.password && error.password === "*"
                  ? "Contraseña"
                  : error.password
                  ? error.password
                  : "Contraseña"}
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
                    ? "Contraseña"
                    : error.password
                    ? error.password
                    : "Contraseña"
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
          <Stack direction="row" spacing={2} className={styled.item}>
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
            className={styled.item}
          >
            <Button
              variant="outlined"
              onClick={handleSubmit}
              endIcon={<SendIcon />}
              sx={{ color: "#0d0d0d" }}
            >
              Registrar
            </Button>
          </Stack>
        </div>
      </Box>
    </>
  );
}
