import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { PostClient } from "../redux/actions/actionClient";
import Navbar from "./Navbar";
import validator from 'validator'
import { IoSendSharp } from 'react-icons/io5'
import "react-toastify/dist/ReactToastify.css";

export const RegisterClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const notify = () =>
    toast.success("Registro exitoso!", {
      icon: "🚀"
    });
  const alertPassword = () =>
    toast.error("Las contraseñas no coinciden");

  const alertAge = () =>
    toast.error("Debe ser mayor de edad");

  const alertPhone = () =>
    toast.error("El numero de celular debe tener 10 digitos o más digitos");

  const alertAgeDigits = () =>
    toast.error("La edad debe ser menor a 99 años");

  const camposVacios = () => {
    toast.error('Debe llenar todos los campos')
  }
  const alertDni = () => {
    toast.error('El Dni debe tener 10 o más digitos')
  }
  const alertEmail = () => {
    toast.error('El email es invalido')
  }


  const handleRegister = (data) => {
    const { password2, ...rest } = data
    if (rest.dni.length < 10) {
      return alertDni()
    }
    else if (!validator.isEmail(rest.email)) {
      return alertEmail()
    }
    else if (rest.phone.length < 10) {
      return alertPhone()
    }
    else if (rest.age < 18) {
      return alertAge()
    }
    else if (rest.age.length > 2) {
      return alertAgeDigits()
    }
    else if (rest.password != password2) {
      return alertPassword()
    }
    dispatch(PostClient(rest))
    notify()
    navigate('/login')
  }
    ;
  return (
    <>
      <Navbar />
      <div className="auth_main">
        <div className="auth_box-container">
          <h3 className="auth_title">Registro</h3>
          <form onSubmit={handleSubmit(handleRegister)}>
            <input
              type="text"
              placeholder="Nombre*"
              className="auth_input"
              autoComplete="off"
              {...register("name", {
                required: true,
              })}
            />
            <input
              type="Number"
              placeholder="DNI*"
              className="auth_input"
              {...register("dni", {
                required: true,
              })}
            /> <input
              type="Number"
              placeholder="Edad*"
              className="auth_input edad"
              {...register("age", {
                required: true,
              })}
            />
            <input
              type='text'
              placeholder="Email*"
              className='auth_input input'
              autoComplete="off"
              {...register('email', {
                required: true,
              })} />
            <input
              type="text"
              placeholder="Direccion*"
              className="auth_input input"
              autoComplete="off"
              {...register("address", {
                required: true,
              })}
            />
            <div className="input_1">
              <input
                type="Number"
                placeholder="Celular*"
                className="auth_input input_ancho "
                autoComplete="off"
                {...register("phone", {
                  required: true,
                })}
              />
              <input
                type="password"
                placeholder="Contraseña*"
                className="auth_input input_ancho"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div className="input_2">
              <input
                type="password"
                placeholder="Confirmar contraseña*"
                className="auth_input input_ancho "
                {...register("password2", {
                  required: true,
                })}
              /> 
                <button className="btn">Registrar <IoSendSharp className="send" /></button>
            </div>
            {Object.keys(errors).length >= 1 && (
              camposVacios()
            )}
          </form>
        </div>
      </div>
    </>
  );
}
