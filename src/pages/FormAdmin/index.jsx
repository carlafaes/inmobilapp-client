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
import SaveIcon from "@mui/icons-material/Save";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from '@mui/material/Alert';

export default function FormAdmin() {
  document.title = "InmobillApp | registrar admin";
  const initInput = {
    name: "",
    dni: "",
    address: "",
    phone: "",
    age: "",
    password: "",
  };

  const navigate = useNavigate();
  const [input, setInput] = useState(initInput);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    name: "*",
    dni: "*",
    password: "*",
    age: "*",
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
    if (e.target.name === "DONE") {
      if (isDone(error)) {
        if (confirm("Seguro desea crear este admin?")) {
          adminService.postAdmin(input).then((res) => {
            setInput(initInput);
            if(res.status !== 201){
              alert("El Admin ya esta creado")
            }
            navigate(`/login`);
          });
        }
      } else {
        alert("Completa correctamente los datos");
      }
    } else {
      
      navigate("/");
    }
  };

  return (
    <Box component="form" autoComplete="off" className={styled.container}>
      <TextField
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
        color={error.name ? "warning" : "success"}
      />
      <TextField
        label={
          error.dni && error.dni === "*" ? "DNI" : error.dni ? error.dni : "DNI"
        }
        value={input.dni}
        name="dni"
        onChange={handleChange}
        color={error.dni ? "warning" : "success"}
      />
      <FormControl>
        <InputLabel
          color={error.password ? "warning" : "success"}
          htmlFor="password"
        >
          {error.password && error.password === "*"
            ? "Contraseña"
            : error.password
            ? error.password
            : "Contraseña"}
        </InputLabel>
        <OutlinedInput
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
          color={error.password ? "warning" : "success"}
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
      <TextField
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
        color={error.age ? "warning" : "success"}
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
        onChange={handleChange}
        color={error.phone ? "warning" : "success"}
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
        value={input.address}
        name="address"
        onChange={handleChange}
        color={error.address ? "warning" : "success"}
      />
      <Stack direction="row">
        <Button variant="outlined" onClick={handleSubmit}>
          Atras
        </Button>
        <Button
          variant="outlined"
          name="DONE"
          onClick={handleSubmit}
          startIcon={<SaveIcon />}
        >
          Registrar
        </Button>
      </Stack>
    </Box>
  );
}
