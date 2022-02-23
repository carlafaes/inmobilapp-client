import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setAdmin,
  setAdminDetailsAgents,
} from "../../redux/actions/actions-admin";
import { isDone, validatePutAdmin } from "../../utils/errorsFormAdmin";
import adminService from "../../services/admin";

import styled from "./PutAdmin.module.css";

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

  const handleSubmit = async (e) => {
    if (e.target.name === "DONE") {
      if (isDone(error)) {
        if (confirm("Seguro que desea hacer estos cambios?")) {
          await adminService.putAdminID(admin.id, admin);
          alert("done!");
          adminService.getAdminIdAgentDetails(admin.id).then((data) => {
            dispatch(setAdminDetailsAgents(data));
          });
          dispatch(setAdmin(null));
        }
      } else {
        alert("Completa correctamente los campos");
      }
    } else {
      if (confirm("Seguro? no se guardaran los cambios!")) {
        dispatch(setAdmin(null));
      }
    }
  };

  return (
    <form className={styled.container} onSubmit={(e) => e.preventDefault()}>
      <input
        className={error.name ? styled.error : styled.done}
        type="text"
        value={admin.name}
        name="name"
        onChange={handleChange}
      />
      <input
        className={error.address ? styled.error : styled.done}
        type="text"
        value={admin.address}
        name="address"
        onChange={handleChange}
      />
      <input
        className={error.age ? styled.error : styled.done}
        type="number"
        value={admin.age}
        name="age"
        onChange={handleChange}
      />
      <input
        className={error.phone ? styled.error : styled.done}
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
