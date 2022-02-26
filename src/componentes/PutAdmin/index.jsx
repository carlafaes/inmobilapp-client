import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setAdmin,
  setAdminDetailsAgents,
} from "../../redux/actions/actions-admin";
import { isDone, validatePutAdmin } from "../../utils/errorsFormAdmin";
import adminService from "../../services/admin";
import swal from "sweetalert";
import { notifyError } from "../../utils/notifications";

import styled from "./PutAdmin.module.css";

export default function PutAdmin({ token, openCloseModal }) {
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
        swal({
          title: "Seguro?",
          text: "Se aplicaran los cambios en su perfil!",
          icon: "warning",
          buttons: ["No", "Si"],
          dangerMode: true,
        }).then((editAdmin) => {
          if (editAdmin) {
            const { dni, ...newAdmin } = admin;
            adminService.putAdminID(admin.id, newAdmin, token).then(() => {
              swal("Tus datos, han sido actualizados!", {
                icon: "success",
              });
              adminService.getAdminIdAgentDetails(admin.id).then((data) => {
                dispatch(setAdminDetailsAgents(data));
              });
              dispatch(setAdmin(null));
              openCloseModal();
            });
          }
        });
      } else {
        notifyError("Completa correctamente los campos!");
      }
    } else {
      swal({
        title: "Estas seguro?",
        text: "No se guardaran los cambios!",
        icon: "warning",
        buttons: ["No", "Si"],
      }).then((op) => {
        if (op) {
          dispatch(setAdmin(null));
          openCloseModal();
        }
      });
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
      <button onClick={handleSubmit}>Cancelar</button>
    </form>
  );
}
