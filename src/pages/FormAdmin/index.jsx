import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminService from "../../services/admin";
import { validateFormAdmin, isDone } from "../../utils/errorsFormAdmin";
import styled from "./FormAdmin.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
  const [error, setError] = useState({
    name: true,
    dni: true,
    address: true,
    phone: true,
    age: true,
    password: true,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validateFormAdmin({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDone(error)) {
      if (confirm("Seguro desea crear este admin?")) {
        adminService.postAdmin(input).then((res) => {
          setInput(initInput);
          navigate(`/login`);
        });
      }
    } else {
      alert("Completa correctamente los espacios!");
    }
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      className={styled.container}
    >
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        helperText="Nombre incorrecto"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
    </Box>
  );
}
