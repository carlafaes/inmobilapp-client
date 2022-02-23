import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAdmin } from "../../redux/actions/actions-admin";
import { isDone, validatePutAdmin } from "../../utils/errorsFormAdmin";

export default function PutAdmin() {
  const [error, setError] = useState({});
  const admin = useSelector((state) => state.reducerAdmin.admin);
  const dispatch = useDispatch();

  if (!admin) {
    return null;
  }

  const handleChange = (e) => {
    dispatch(
      setAdmin({
        ...admin,
        [e.target.name]: e.target.value,
      })
    );
    setError(
      validatePutAdmin({
        ...admin,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    if (e.target.name === "DONE") {
      if (isDone(error)) {
        const result = prompt("Seguro que desea hacer estos cambios?", "Si");
        if (result) {
          console.log(admin);
          alert("done!");
          dispatch(setAdmin(null));
        }
      } else {
        alert("Completa correctamente los campos");
      }
    } else {
      const result = prompt("Seguro? no se guardaran los cambios!", "Si");
      if (result) {
        dispatch(setAdmin(null));
      }
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={admin.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={admin.address}
        name="address"
        onChange={handleChange}
      />
      <input
        type="number"
        value={admin.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        value={admin.phone}
        name="phone"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} name="DONE">
        terminar
      </button>
      <button onClick={handleSubmit}>cancelar</button>
    </form>
  );
}
