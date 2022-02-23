import {
  Box,
  Switch,
  Slider,
  Typography,
  Select,
  MenuItem,
  TextField,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

export default function FilterProperties() {
  const initialState = {
    rentalPrice: [10, 5000000],
    state: "all",
    area: [10, 1000],
    rooms: [1, 20],
    city: "",
    address: "",
    neighborhood: "",
  };

  const [input, setInput] = useState(initialState);
  const [filter, setFilter] = useState(false);

  const handleChange = (e) => {
    if (filter) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      
    }
  };

  const applyFilter = () => {
    setFilter(!filter);
  };

  return (
    <Box component="form" autoComplete="off">
      <TextField
        label="Ciudad"
        variant="outlined"
        onChange={handleChange}
        name="city"
      />
      <TextField
        label="Direccion"
        variant="outlined"
        onChange={handleChange}
        name="address"
      />
      <TextField
        label="Barrio"
        variant="outlined"
        onChange={handleChange}
        name="neighborhood"
      />
      <Box sx={{ width: 300 }}>
        <Typography id="area">Area</Typography>
        <Slider
          aria-labelledby="area"
          name="area"
          value={input.area}
          onChange={handleChange}
          min={10}
          max={1000}
          valueLabelDisplay="auto"
          disableSwap
        />
        <Typography id="rooms">Cuartos</Typography>
        <Slider
          aria-labelledby="rooms"
          name="rooms"
          value={input.rooms}
          onChange={handleChange}
          min={1}
          max={20}
          valueLabelDisplay="auto"
          disableSwap
        />
        <Typography id="rentalPrice">Area</Typography>
        <Slider
          aria-labelledby="rentalPrice"
          name="rentalPrice"
          value={input.rentalPrice}
          onChange={handleChange}
          min={10}
          max={5000000}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
      <Typography id="state">Estado</Typography>
      <Select
        name="state"
        aria-labelledby="state"
        value={input.state}
        onChange={handleChange}
      >
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="available">Disponibles</MenuItem>
        <MenuItem value="unavailable">No disponibles</MenuItem>
        <MenuItem value="reserved">Reservada</MenuItem>
      </Select>
      <Typography id="filter">
        {filter ? "Quitar Filtros" : "Aplicar Filtros"}
      </Typography>
      <Switch aria-labelledby="filter" onChange={applyFilter} />
    </Box>
  );
}
