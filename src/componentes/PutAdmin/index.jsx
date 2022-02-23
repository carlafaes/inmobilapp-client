import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function PutAdmin() {
  const admin = useSelector((state) => state.reducerAdmin.admin);

  if (!admin) {
    return null;
  }

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e.target.name === "DONE") {
      console.log(admin);
    } else {
      console.log("esc");
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
