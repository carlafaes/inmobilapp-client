import {
  Box,
  Slider,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllProperties,
  setFilterProperties,
} from "../../redux/actions/actionsProperties";
import '../../styles/FilterPropertiesNav.css'


export default function FilterProperties() {
  const dispatch = useDispatch();

  const initialState = {
    rentalPrice: [100, 2000],
    state: "all",
    area: [25, 300],
    rooms: [1, 20],
    city: "",
    address: "",
    neighborhood: "",
    typeProperty: "all",
  };

  const [input, setInput] = useState(initialState);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    dispatch(
      setFilterProperties({ ...input, [e.target.name]: e.target.value })
    );
  };

  const clearFilter = () => {
    dispatch(getAllProperties());
    setInput(initialState);
  };

  

  return (
    <Box className="Box_filter" component="form" autoComplete="off">
      <div className="sector_inputs">
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
      </div>
      
      <Box className="sector_rangos">
        <Typography id="area">Area(seleccione rango: min-max)</Typography>
        
        <Slider
          className='slider_color'
          aria-labelledby="area"
          name="area"
          value={input.area}
          onChange={handleChange}
          min={25}
          max={300}
          valueLabelDisplay="auto"
          disableSwap
        />
        
        <Typography id="rooms">Cuartos(seleccione rango: min-max)</Typography>
        <Slider
          className='slider_color'
          aria-labelledby="rooms"
          name="rooms"
          value={input.rooms}
          onChange={handleChange}
          min={1}
          max={20}
          valueLabelDisplay="auto"
          disableSwap
        />
        <Typography id="rentalPrice">Precio de renta(seleccione rango: min-max)</Typography>
        <Slider
          className='slider_color'
          aria-labelledby="rentalPrice"
          name="rentalPrice"
          value={input.rentalPrice}
          onChange={handleChange}
          min={100}
          max={2000}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
      <div className='sector_opciones'>
      <Typography className='sector_titulos' id="state">Estado</Typography>
      <Select
        className='sector_select'
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
      </div>
      <div className='sector_opciones'>
      <Typography className='sector_titulos' id="typeProperty">Tipo</Typography>
      <Select
        className='sector_select'
        name="typeProperty"
        aria-labelledby="typeProperty"
        value={input.typeProperty}
        onChange={handleChange}
      >
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="casa">Casa</MenuItem>
        <MenuItem value="local">Local</MenuItem>
        <MenuItem value="apartamento">Apartamento</MenuItem>
        <MenuItem value="finca">Finca</MenuItem>
      </Select>
      </div>
      
      <Button className='sector_clean' variant="contained" onClick={clearFilter}>
        Limpiar Filtros
      </Button>
    </Box>
  );
}
