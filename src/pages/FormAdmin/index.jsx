import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../componentes/Input";
import adminService from "../../services/admin";
import { validateFormAdmin, isDone } from "../../utils/errorsFormAdmin";

export default function FormAdmin() {
  document.title = "InmobillApp | registerAdmin";
  const initInput = {
    name: "",
    DNI: "",
    address: "",
    phone: "",
    age: "",
  };

  const navigate = useNavigate();
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
    if (isDone(error)) {
      if (confirm("Seguro desea crear este admin?")) {
        adminService.postAdmin(input).then((res) => {
          setInput(initInput);
          navigate(`/viewAdmin/${res.data.id}`);
        });
      }
    } else {
      alert("Completa correctamente los espacios!");
    }
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
          value={input.name}
          error={error.name}
          placeholder={"Name"}
          type={"text"}
          name="name"
          handleChange={handleChange}
        />
        <Input
          value={input.DNI}
          error={error.DNI}
          placeholder={"DNI"}
          type={"text"}
          name="DNI"
          handleChange={handleChange}
        />
        <Input
          value={input.address}
          error={error.address}
          placeholder={"Address"}
          type={"text"}
          name="address"
          handleChange={handleChange}
        />
        <Input
          value={input.phone}
          error={error.phone}
          placeholder={"Phone"}
          type={"text"}
          name="phone"
          handleChange={handleChange}
        />
        <Input
          value={input.age}
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
