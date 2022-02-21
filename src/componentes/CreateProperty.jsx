import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postProperties } from "../redux/actions/actions-propierties";
import "../styles/Property-Form.css";
import "../Img/icono.png";

//Validador estados error input del form

function validate(input) {
  let errors = {};
  if (!input.typeProperty) {
    errors.typeProperty = "Debe seleccionar un tipo de inmueble";
  }
  if (!input.state) {
    errors.state = "Debe seleccionar un estado del inmueble";
  }
  if (!input.images.length) {
    errors.img = "Debe ingresar al menos una imagen";
  }
  if (!input.rentalPrice) {
    errors.rentalPrice = "Debe ingresar un precio de alquiler";
  }
  if (Number(input.rentalPrice) < 0) {
    errors.rentalPrice = "No puede insertar valores negativos";
  }
  if (!input.description) {
    errors.description = "Debe ingresar una descripcion del inmueble";
  }
  if (!input.date) {
    errors.date = "Debe ingresar una fecha";
  }
  if (!input.agentID) {
    errors.agentID = "Debe ingresar un ID de Agente";
  }
  return errors;
}

//Validador estados error details

function validateDetails(inputDetails) {
    let errorsD = {};
    if (!inputDetails.area) {
      errorsD.area = "Debe ingresar un area en metros";
    }
    if (!inputDetails.rooms) {
      errorsD.rooms = "Debe ingresar una cantidad de habitaciones";
    }
    if (!inputDetails.baths) {
      errorsD.baths = "Debe ingresar una cantidad de baños";
    }
    if (!inputDetails.garage) {
      errorsD.garage = "Debe ingresar si posee o no garage";
    }
    return errorsD;
}

//Validador estados error lotacion

function validatelocation(inputlocation) {
    let errorsU = {};
    if (!inputlocation.city) {
      errorsU.city = "Se requiere una ciudad";
    }
    if (!inputlocation.neighborhood) {
      errorsU.neighborhood = "Se requiere un barrio";
    }
    if (!inputlocation.address) {
      errorsU.address = "Se requiere una direccion";
    }
    return errorsU;
}

export default function CreateProperty() {
  const dispatch = useDispatch();
  //Estado del input para el form
  const [input, setInput] = useState({
    typeProperty: "",
    location: {},
    state: "",
    images: [],
    img: "",
    rentalPrice: "",
    description: "",
    details: {},
    date: "",
    agentID: "",
  });

  //Estado de errores

  const [errors, setErrors] = useState({});

  //Estado del boton para controlar el form


  //Handlers

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerSelectType = (e) => {
    setInput({
      ...input,
      typeProperty: e.target.value,
    });
  };

  const handlerSelectState = (e) => {
    setInput({
      ...input,
      state: e.target.value,
    });
  };

  const handlerSelectGarage = (e) => {
    setInputDetails({
      ...inputDetails,
      garage: e.target.value,
    });
  };

  const handlerImages = (e) => {
      e.preventDefault()
    setInput({
      ...input,
      images: [...input.images, input.img],
      img: ''
    });
    
  };

  const handlerImg = (e) => {
    setInput({
      ...input,
      img: e.target.value,
    });
  };
  //console.log(input);
  //Handlers Objetos

  const [inputlocation, setInputlocation] = useState({});
  const [inputDetails, setInputDetails] = useState({});

  const handlelocation = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      location: { ...inputlocation },
    });
  };
  const handleDetails = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      details: { ...inputDetails },
    });
  };
  const handleChangelocation = (e) => {
    e.preventDefault();

    setInputlocation({
      ...inputlocation,
      [e.target.name]: e.target.value,
    });
    setErrorsU(
      validatelocation({
        ...inputlocation,
        [e.target.name]: e.target.value,
      })
    );
    handlelocation(e);
  };
  const handleChangeDetails = (e) => {
    e.preventDefault();

    setInputDetails({
      ...inputDetails,
      [e.target.name]: e.target.value,
    });
    setErrorsD(
      validateDetails({
        ...inputDetails,
        [e.target.name]: e.target.value,
      })
    );
    handleDetails(e);
  };

  //Errors de location y details(con respectivos validadores)

    const [errorsUbi, setErrorsU] = useState({});
    const [errorsDet, setErrorsD] = useState({});

  // Botones para checkear campos

  const handleAlllocation = (e) => {
    handleChangelocation(e);
  };

  const handleAllDetails = (e) => {
    handleChangeDetails(e);
  };

  const [buttonU, setButtonU] = useState({});
  useEffect(() => {
    inputlocation.city && inputlocation.neighborhood && inputlocation.address
      ? setButtonU(false)
      : setButtonU(true);
  }, [inputlocation]);

  const [buttonD, setButtonD] = useState({});
  useEffect(() => {
    inputDetails.area &&
    inputDetails.rooms &&
    inputDetails.baths &&
    inputDetails.garage
      ? setButtonD(false)
      : setButtonD(true);
  }, [inputDetails]);

  //funcion loca

  const Funcionreloca = (inputloc, inputdet) => {
    if(inputdet && inputloc){
        return true
    }
    else {return false}
  }

  const [button, setButton] = useState({})

  useEffect(() => {
      input.typeProperty &&
      Object.entries(input.location).length &&
      input.state &&
      input.images.length &&
      input.rentalPrice &&
      input.description &&
      Object.entries(input.details).length &&
      input.date &&
      input.agentID &&
      Funcionreloca(errorsDet,errorsUbi) ? 
      setButton(false) :
      setButton(true)
  },[input])

  //Handler del submit

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postProperties(input));
    alert("Inmueble creado!");
  };

  ///
  //console.log(errors);
  //console.log(errorsDet);
  //console.log(errorsUbi);
  return (
    <form className="submitform" >
      <div align="center">
        <img className="img" src="icono.png" />
      </div>
      <h2>Formulario creación inmuebles</h2>
      <label>Type of Property:</label>
      <select defaultValue="" onChange={(e) => handlerSelectType(e)}>
        <option value="" disabled>
          Tipo de propiedad:
        </option>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="local">Local</option>
        <option value="finca">Finca</option>
      </select>
      {errors.typeProperty && <h3>{errors.typeProperty}</h3>}

      <div className="selects">
        <label>location:</label>
        <label>City:</label>
        <input
          type="text"
          value={inputlocation.city}
          name="city"
          onChange={(e) => handleChangelocation(e)}
        />
        {errorsUbi.city && <h3>{errorsUbi.city}</h3>}
        <label>Neighbourhood:</label>
        <input
          type="text"
          value={inputlocation.neighborhood}
          name="neighborhood"
          onChange={(e) => handleChangelocation(e)}
        />
        {errorsUbi.neighborhood && <h3>{errorsUbi.neighborhood}</h3>}
        <label>address:</label>
        <input
          type="text"
          value={inputlocation.address}
          name="address"
          onChange={(e) => handleChangelocation(e)}
        />
        {errorsUbi.address && <h3>{errorsUbi.address}</h3>}
        <button className="submitbtn" disabled={buttonU} onClick={(e) => handleAlllocation(e)}>
          Check
        </button>
      </div>

      <label>State:</label>
      <select defaultValue="" onChange={(e) => handlerSelectState(e)}>
        <option value="" disabled>
          Tipo de estado:
        </option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
        <option value="reserved">Reserved</option>
      </select>
      {errors.state && <h3>{errors.state}</h3>}
      <br />
      <div>
        <label>Images:</label>
        <input
          type="text"
          value={input.img}
          onChange={handlerImg}
          name="images"
        />
        {errors.img && <h3>{errors.img}</h3>}
        <button className="submitbtn" onClick={handlerImages}>Add IMG</button>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={input.rentalPrice}
          name="rentalPrice"
          onChange={(e) => handleChange(e)}
        />
        {errors.rentalPrice && <h3>{errors.rentalPrice}</h3>}
      </div>
      <div>
        <label>Description:</label>
        <input
          type="textarea"
          value={input.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        {errors.description && <h3>{errors.description}</h3>}
      </div>

      <div className="selects">
        <label>Details:</label>
        <label>Area:</label>
        <input
          type="text"
          value={inputDetails.area}
          name="area"
          onChange={(e) => handleChangeDetails(e)}
        />
        {errorsDet.area && <h3>{errorsDet.area}</h3>}
        <label>Rooms:</label>
        <input
          type="text"
          value={inputDetails.rooms}
          name="rooms"
          onChange={(e) => handleChangeDetails(e)}
        />
        {errorsDet.rooms && <h3>{errorsDet.rooms}</h3>}
        <label>Baths:</label>
        <input
          type="text"
          value={inputDetails.baths}
          name="baths"
          onChange={(e) => handleChangeDetails(e)}
        />
        {errorsDet.baths && <h3>{errorsDet.baths}</h3>}
        <label>Garage:</label>
        <select defaultValue="" onChange={(e) => handlerSelectGarage(e)}>
          <option value="" disabled>
            Seleccione opcion:
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        {errorsDet.garage && <h3>{errorsDet.garage}</h3>}
        <br />
        {/*<input type="boolean"
                value= {inputDetails.garage}
                name="garage" 
                onChange={(e) => handleChangeDetails(e)}/>*/}
        <button className="submitbtn" disabled={buttonD} onClick={(e) => handleAllDetails(e)}>
          Check Details
        </button>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={input.date}
          name="date"
          onChange={handleChange}
        />
        {errors.date && <h3>{errors.date}</h3>}
      </div>
      <div>
        <label>Agente ID:</label>
        <input
          type="text"
          value={input.agentID}
          name="agentID"
          onChange={handleChange}
        />
        {errors.agentID && <h3>{errors.agentID}</h3>}
      </div>

      <button disabled={button} className="submitbtn" onClick={(e) =>handleSubmit(e)}>
        Create Property
      </button>
    </form>
  );
}
