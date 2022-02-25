import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast} from "react-toastify";
import { PostClient } from "../redux/actions/actionClient";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";

export const RegisterClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors },} = useForm();
  
  const notify = () =>
    toast.success("Successful registration!", {
      icon: "🚀",
      theme: "dark",
    });
  const alertPassword = () =>
    toast.error("Passwords do not match ", {
      theme: "dark",
    });
  const alertAge = () =>
    toast.error("You must be of legal age", {
      theme: "dark",
    });
  const alertPhone = () =>
    toast.error("number greater than 10 digits", {
      theme: "dark",
    });
  const alertAgeDigits = () =>
    toast.error("must not have more than 3 digits", {
      theme: "dark",
    });

  const handleRegister = (data) => {
    const { password2, ...rest } = data
    if (rest.phone.length < 10) {
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
    console.log(data)
    notify()
    navigate(-1)
  }
;
return (
  <>
    <Navbar />
    <div className="auth_main">
      <div className="auth_box-container">
        <h3 className="auth_title">Register</h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <input
            type="text"
            placeholder="Names*"
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
          />
          <input
            type="text"
            placeholder="address*"
            className="auth_input"
            autoComplete="off"
            {...register("address", {
              required: true,
            })}
          />
          <input
            type="Number"
            placeholder="Phone*"
            className="auth_input"
            autoComplete="off"
            {...register("phone", {
              required: true,
            })}
          />
          <input
            type="Number"
            placeholder="Age*"
            className="auth_input"
            {...register("age", {
              required: true,
            })}
          />
          <input
            type="password"
            placeholder="Password*"
            className="auth_input"
            {...register("password", {
              required: true,
            })}
          />
          <input
            type="password"
            placeholder="Confirm Password*"
            className="auth_input"
            {...register("password2", {
              required: true,
            })}
          />
          <button className="btn btn-primary">Register</button>
          {Object.keys(errors).length >= 1 && (
            <div style={{ color: "red" }}>
              Todos los campos son requeridos*
            </div>
          )}
        </form>
      </div>
    </div>
  </>
);
}
