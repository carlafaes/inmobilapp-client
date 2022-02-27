import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import agentService from "../../services/agent";
import { validateFormAdmin, isDone } from "../../utils/errorsFormAdmin";
import styled from "./FormAgent.module.css";
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



export default function FormAgent() {
    document.title = "InmobillApp | registrar agente";
    const initInput = {
        name: "",
        dni: "",
        address: "",
        phone: "",
        age: "",
        password: "",
        password1: "",
        adminID: "6218312f2a77823be06b1672"
    }

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
    })

    function onChangeHandler(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError(
        validateFormAdmin(
        { ...input, [e.target.name]: e.target.value },
        error,
        e.target.name
        )
    );
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(isDone(error)){
          const {password1, ...newAgent} = input;
          agentService.createAgent(newAgent)
            .then((res) => {
                setInput(initInput);
                navigate(`/login`);
            })
            .catch((err) => {
                notifyError("Un admin con ese DNI ya se encuentra registrado!");
                setInput(initInput);
            })
        }else{
            notifyError("Completa correctamente los datos!");
        }
    }

    return (
            <div>
                <NavBar/>
                <Box component="form" autoComplete="off" className={styled.container}>
                    <div className={styled.content}>
                        <h1 className={styled.title}>Registrar Agente</h1>
                        <Stack direction="row" spacing={2} className={styled.item}>
                            <TextField required
                            label={
                              error.name && error.name === "*"
                                ? "Nombre"
                                : error.name
                                ? error.name
                                : "Nombre"
                            }
                            value={input.name}
                            name="name"
                            onChange={onChangeHandler}
                            color={error.name ? "error" : "success"}/>
                            <TextField required 
                            label={'DNI'} 
                            value={input.dni}
                            name="dni"
                            onChange={onChangeHandler}
                            color={error.dni? "error" : "success"}/>
                            <TextField required 
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
                            onChange={onChangeHandler}
                            color={error.age? "error" : "success"} 
                            sx={{width: "100px"}}/>
                        </Stack>
                        <Stack direction="row" spacing={2} className={styled.item}>
                            <FormControl sx={{width: "100%"}}>
                                <InputLabel
                                    color= {error.password? "error" : "success"}
                                    htmlFor="password"
                                    required
                                >
                                    Contraseña
                                </InputLabel>
                                <OutlinedInput
                                    required
                                    id="password"
                                    type={showPassword? "text" : "password"}
                                    name="password"
                                    onChange={onChangeHandler}
                                    label="contraseña"
                                    color={error.password? "error" : "success"}
                                />
                            </FormControl>
                            <FormControl sx={{width: "100%"}}>
                                <InputLabel
                                color={error.password? "error" : "success"}
                                htmlFor="password1"
                                required
                                >
                                Confirmar contraseña
                                </InputLabel>
                                <OutlinedInput
                                required
                                id="password1"
                                type={showPassword? "text" : "password"}
                                name="password1"
                                onChange={onChangeHandler}
                                label="Confirmar Contraseña"
                                color={error.password? "error" : "success"}
                                endAdornment = {
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
                            label="Celular"
                            type="tel"
                            name="phone"
                            sx={{width: "100%"}}
                            onChange={onChangeHandler}
                            color={error.phone? "error" : "success"}
                            />
                            <TextField
                            label="Dirección"
                            type="text"
                            sx={{width: "100%"}}
                            name="address"
                            onChange={onChangeHandler}
                            color={error.address? "error" : "success"}
                            />
                        </Stack>

                        <Stack direction="row" alignContent="center" spacing={6} className={styled.item}>
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
            </div>
    )
}