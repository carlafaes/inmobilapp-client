import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postProperties } from "../redux/actions/actions-propierties";
import "../styles/Property-Form.css";
import "../Img/icono.png";

function validate(input) {
  let errors = {};
  if (!input.typeProperty) {
    errors.typeProperty = "Debe requiere un tipo de inmueble";
  }
  if (!input.state) {
    errors.state = "Debe seleccionar un estado del inmueble";
  }
  if (!input.images.length) {
    errors.images = "Debe ingresar una imagen";
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

export default function CreateProperty() {
  const dispatch = useDispatch();
  //Estado del input para el form
  const [input, setInput] = useState({
    typeProperty: "",
    ubication: {},
    state: "",
    images: [],
    img: "",
    rentalPrice: "",
    description: "",
    details: {},
    date: "",
    agentID: "",
  });

  //Estado de errores y validador

  const [errors, setErrors] = useState({});

  //Estado del boton para controlar el form

  const [button, setButton] = useState(true);
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
    setInput({
      ...input,
      images: [...input.images, input.img],
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

  const [inputUbication, setInputUbication] = useState({});
  const [inputDetails, setInputDetails] = useState({});

  const handleUbication = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      ubication: { ...inputUbication },
    });
  };
  const handleDetails = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      details: { ...inputDetails },
    });
  };
  const handleChangeUbication = (e) => {
    e.preventDefault();

    setInputUbication({
      ...inputUbication,
      [e.target.name]: e.target.value,
    });
    setErrorsU(
      validateUbication({
        ...inputUbication,
        [e.target.name]: e.target.value,
      })
    );
    handleUbication(e);
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

  //Errors de ubication y details(con respectivos validadores)

  const [errorsUbi, setErrorsU] = useState({});

  function validateUbication(inputUbication) {
    let errorsU = {};
    if (!inputUbication.city) {
      errorsU.city = "Se requiere una ciudad";
    } else if (!inputUbication.neighbourhooh) {
      errorsU.neighbourhooh = "Se requiere un barrio";
    } else if (!inputUbication.adress) {
      errorsU.images = "Se requiere una ubicacion";
    }
    return errorsU;
  }

  const [errorsDet, setErrorsD] = useState({});

  function validateDetails(inputDetails) {
    let errorsD = {};
    if (!inputDetails.area) {
      errorsD.area = "Debe ingresar un area en metros";
    } else if (!inputDetails.rooms) {
      errorsD.rooms = "Debe ingresar una cantidad de habitaciones";
    } else if (!inputDetails.baths) {
      errorsD.baths = "Debe ingresar una cantidad de baños";
    } else if (!inputDetails.garage) {
      errorsD.garage = "Debe ingresar si posee o no garage";
    }
    return errorsD;
  }

  // Botones para checkear campos

  const handleAllUbication = (e) => {
    handleChangeUbication(e);
  };

  const handleAllDetails = (e) => {
    handleChangeDetails(e);
  };

  const [buttonU, setButtonU] = useState({});
  useEffect(() => {
    inputUbication.city && inputUbication.neighbourhooh && inputUbication.adress
      ? setButtonU(false)
      : setButtonU(true);
  }, [errorsUbi]);

  const [buttonD, setButtonD] = useState({});
  useEffect(() => {
    inputDetails.area &&
    inputDetails.rooms &&
    inputDetails.baths &&
    inputDetails.garage
      ? setButtonD(false)
      : setButtonD(true);
  }, [inputDetails]);

  //Handler del submit

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postProperties(input));
    alert("Inmueble creado!");
  };

  ///
  console.log(errors);
  return (
    <form className="submitform" onSubmit={(e) => e.preventDefault()}>
      <div align="center">
        <img src="icono.png" />
      </div>
      <h2>Formulario creación inmuebles</h2>
      <label>Type of Property:</label>
      <select onChange={(e) => handlerSelectType(e)}>
        <option disabled selected>
          Tipo de propiedad:
        </option>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="local">Local</option>
        <option value="finca">Finca</option>
        {errors.typeProperty && <label>{errors.typeProperty}</label>}
      </select>

      <div className="selects">
        <label>Ubication:</label>
        <label>City:</label>
        <input
          type="text"
          value={inputUbication.city}
          name="city"
          onChange={(e) => handleChangeUbication(e)}
        />
        <label>Neighbourhood:</label>
        <input
          type="text"
          value={inputUbication.neighbourhooh}
          name="neighbourhooh"
          onChange={(e) => handleChangeUbication(e)}
        />
        <label>Adress:</label>
        <input
          type="text"
          value={inputUbication.adress}
          name="adress"
          onChange={(e) => handleChangeUbication(e)}
        />
        <button disabled={buttonU} onClick={(e) => handleAllUbication(e)}>
          Check
        </button>
      </div>

      <label>State:</label>
      <select onChange={(e) => handlerSelectState(e)}>
        <option disabled selected>
          Tipo de estado:
        </option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
        <option value="reserved">Reserved</option>
      </select>
      <br />
      <div>
        <label>Images:</label>
        <input
          type="text"
          value={input.img}
          onChange={handlerImg}
          name="images"
        />
        <button onClick={handlerImages}>Add IMG</button>
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={input.rentalPrice}
          name="rentalPrice"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="textarea"
          value={input.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
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
        <label>Rooms:</label>
        <input
          type="text"
          value={inputDetails.rooms}
          name="rooms"
          onChange={(e) => handleChangeDetails(e)}
        />
        <label>Baths:</label>
        <input
          type="text"
          value={inputDetails.baths}
          name="baths"
          onChange={(e) => handleChangeDetails(e)}
        />
        <label>Garage:</label>
        <select onChange={(e) => handlerSelectGarage(e)}>
          <option disabled selected>
            Seleccione opcion:
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <br />
        {/*<input type="boolean"
                value= {inputDetails.garage}
                name="garage" 
                onChange={(e) => handleChangeDetails(e)}/>*/}
        <button disabled={buttonD} onClick={(e) => handleAllDetails(e)}>
          Check
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
      </div>
      <div>
        <label>Agente ID:</label>
        <input
          type="text"
          value={input.agentID}
          name="agentID"
          onChange={handleChange}
        />
      </div>

      <button className="submitbtn" disabled={button} onClick={handleSubmit}>
        Create Property
      </button>
    </form>
  );
}
