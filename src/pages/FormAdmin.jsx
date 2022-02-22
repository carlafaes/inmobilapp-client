import React, { useState } from "react";
import Input from "../componentes/Input";
import adminService from "../services/admin";
import { validateFormAdmin } from "../utils/errorsFormAdmin";

export default function FormAdmin() {
  document.title = "InmobillApp | registerAdmin";
  const initInput = {
    name: "",
    DNI: "",
    address: "",
    phone: "",
    age: 0,
  };

  const [input, setInput] = useState(initInput);
  const [error, setError] = useState({
    name: true,
    DNI: true,
    address: true,
    phone: true,
    age: true,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(validateFormAdmin({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDone()) {
      adminService.postAdmin(input).then((data) => console.log(data));
      setInput(initInput);
    } else {
      alert("No...");
    }
  };

  const isDone = () => {
    return !Object.values(error).reduce((pre, cur) => pre || cur, false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url(https://www.xtrafondos.com/descargar.php?id=3474&resolucion=2560x1440)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        style={{ maxWidth: "80%", display: "grid" }}
        onSubmit={handleSubmit}
      >
        <Input
          error={error.name}
          placeholder={"Name"}
          type={"text"}
          name="name"
          handleChange={handleChange}
        />
        <Input
          error={error.DNI}
          placeholder={"DNI"}
          type={"text"}
          name="DNI"
          handleChange={handleChange}
        />
        <Input
          error={error.address}
          placeholder={"Address"}
          type={"text"}
          name="address"
          handleChange={handleChange}
        />
        <Input
          error={error.phone}
          placeholder={"Phone"}
          type={"text"}
          name="phone"
          handleChange={handleChange}
        />
        <Input
          error={error.age}
          placeholder={"Age"}
          type={"number"}
          name="age"
          handleChange={handleChange}
        />
        <button onClick={handleSubmit}>send</button>
      </form>
    </div>
  );
}
