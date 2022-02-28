import React, { useState } from "react";
import NavBar from "../../componentes/Navbar";
import Box from "@mui/material/Box";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    Button,
    Stack,
} from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from "./FormProperty.module.css";
import { TextField } from "@material-ui/core";

export default function FormProperty() {
    const [input, setInput]= useState({});

    function onChangeHandler() {

    }

    return (
        <div>
            <NavBar/>
            <Box>
                <div className={styles.content}>
                    <h1 className={styles.title}>Agregar inmuebles</h1>
                    <Stack>
                        <InputLabel required htmlFor="property-type">Tipo de propiedad</InputLabel>
                        <Select
                        labelId="property-type"
                        id="property-type"
                        label="property-type"
                        value={input.property_type}
                        >
                            <MenuItem value="casa">Casa</MenuItem>
                            <MenuItem value="apartamento">Apartamento</MenuItem>
                            <MenuItem value="local" >Local</MenuItem>
                        </Select>
                    </Stack>
                    <Stack>
                        <TextField required 
                                label={'Ciudad'} 
                                value={input.city}
                                name="city"
                                onChange={onChangeHandler}
                                /* color={error.dni? "error" : "succes"} *//>
                            <TextField required 
                                /* label={
                                    error.age && error.age === "*"
                                    ? "Edad"
                                    : error.age
                                    ? error.age
                                    : "Edad"
                                } */ 
                                value={input.age}
                                name="age"
                                onChange={onChangeHandler}
                                /* color={error.age? "error" : "success"} */ 
                                sx={{width: "100px"}}/>
                    </Stack>
                </div>
            </Box>           
        </div>
    )
}