import React from "react";
import './maquetaForm.scss'
import {RegularInput} from "./RegularInput";
export default function MaquetaForm() {
  return (
    <>
   
    
    <div className="container-maqueta">
    
      <form className="form-maq" onSubmit={(e) => e.preventDefault()}>
      <div>
      <h1 className="titulo_form_maq">Formulario</h1>
      <h4 className='campos'>Los campos * son obligatorios</h4>
     </div>
      <RegularInput
    names='name'
    label='Nombre*'
    type='text'
    msgError='Nombre es incorrecto'
    />
    <RegularInput
    names='lastname'
    label='Apellido*'
    type='text'
    msgError='Apellido es incorrecto'
    />
    <RegularInput
    names='email'
    label='Correo electronico*'
    type='email'
    msgError='Ingresa un correo valido,ejemplo: ejemplo@ejemplo.com'
    />
    <RegularInput
    names='password'
    label='Contraseña*'
    type='password'
    msgError='Contraseña debe tener mayusculas,minusculas y numeros'
    />
        {/* <div className="input_conter">
          <label className="label-maq" htmlFor="username">
            Name Input
            <abbr title="required" aria-label="required">
              *
            </abbr>
        </label >
        <input className="inp"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
          />
          <i className="fa-solid fa-check icon-ok"></i>
          <i className="fa-solid fa-times icon-wrong"></i>
          <p className="msg">Incorrect username</p>
        </div>
        <div className="input_conter">
        <label className="label-maq" htmlFor="error">
            error
            <abbr title="required" aria-label="required">
              *
            </abbr>
        </label>
        <input className="inp"
            id="error"
            type="text"
            name="error"
            placeholder="Error"
            autoComplete="off"
          />
          <p>Error message</p>
        </div>
        <div className="input_conter">
          <label className="label-maq" htmlFor="password">
            Password
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </label>
          <input className="inp"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
          />
          <i className="fa-solid fa-check icon-ok"></i>
          <i className="fa-solid fa-times icon-wrong"></i>
          <p className="msg">Incorrect password</p>
        </div>
        <div className="input_conter">
          <label className="label-maq" htmlFor="email">
            Email
          </label>
          <input className="inp"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <i className="fa-solid fa-check icon-ok"></i>
          <i className="fa-solid fa-times icon-wrong"></i>
          <p className="msg">Incorrect email</p>
        </div>
        <div className="input_conter">
          <label className="label-maq" htmlFor="number">
            Number
        </label>
        <input autoComplete="off" className="inp"
            id="number"
            type="number"
            name="number"
            placeholder="Number"
            autoComplete="off"
          />
          <i className="fa-solid fa- icon-ok"></i>
          <i className="fa-solid fa-times icon-wrong"></i>
          <p className="msg">Incorrect number</p>
        </div>
        <div className="input_conter">
          <label className="label-maq" htmlFor="url">
            Url
          </label>
          <input className="inp"
            id="url"
            type="url"
            name="url"
            placeholder="url"
            autoComplete="off"
          />
          <i className="fa-solid fa-check icon-ok"></i>
          <i className="fa-solid fa-times icon-wrong"></i>
          <p className="msg">Incorrect url</p>
        </div>
        <div className="input_conter label-up">
          <label className="label-maq" htmlFor="tel">
            Tel:
          </label>
          <input className="inp"
            id="tel"
            type="tel"
            name="tel"
            placeholder="tel"
            autoComplete="off"
          />
          <i className="fa-solid fa-check icon-ok"></i>
          <i className="fa-solid fa-times icon-wrong"></i>
          <p className="msg">Incorrect telephone</p>
        </div>*/}
        <div className="botones_form">
        <button className="btn-f">Cancelar</button> 
        <button className="btn-f">Enviar</button>
        </div>
        
      </form>
    </div>
    </>
  );
}
