import React, { useState } from "react";
import { sendMail } from "./helper/mail";
import "./newsletter.css";
import swal from "sweetalert";

export default function Mail() {
  const [values, setValues] = useState({
    userEmail: "",
    userName: "",
    status: false,
  });

  const { userEmail, userName, status } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendMail({ userEmail, userName })
      .then((data) => {
        swal("Envio exitoso", {
          icon: "success",
        });
        setValues({ ...values, status: true });
      })
      .catch(() => {
        swal("hubo un problema al enviar tu correo!", {
          icon: "warning",
        });
      });
  };

  return (
    <>
      <h1 className="title_mail">Suscribite y recibe novedades semanales</h1>
      <form id="form-sus" className="form-mail" onSubmit={handleSubmit}>
        <label className="label-email-form">
          Cual es tu nombre?: <br />
          <input
            className="input-mail"
            type="text"
            placeholder="nombre"
            required
            value={userName}
            onChange={handleChange("userName")}
          />
        </label>
        <label className="label-email-form">
          Correo electronico:
          <br />
          <input
            className="input-mail"
            type="email"
            placeholder="correo electronico"
            required
            value={userEmail}
            onChange={handleChange("userEmail")}
          />
        </label>
        <button className="btn_sus" type="submit">
          Enviar
        </button>
      </form>
      {status ? (
        <div>
          <h2 className="label-email-form">Enviado exitosamente!</h2>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

const validated = (type, value) => {
  switch (type) {
    case "text":
      if (!/\d/g.test(value) && value.length > 1) {
        return true;
      } else {
        return false;
      }
    case "email":
      let part1 = value.split("@");
      let part2 = part1[1] && part1[1].split(".");
      if (part1 && part1.length === 2 && part2 && part2[1] === "com") {
        return true;
      } else {
        return false;
      }

    default:
      break;
  }
};
