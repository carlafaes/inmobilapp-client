import React from "react";

import styled from "./CardAgent.module.css";

export default function CardAgent({
  name,
  age,
  phone,
  id,
  crudAgent,
  deleteAgent,
  editAgent,
}) {
  return (
    <div className={styled.card}>
      {crudAgent ? (
        <button onClick={() => deleteAgent(id)}>Eliminar</button>
      ) : null}
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{phone}</h3>
      {crudAgent ? (
        <button onClick={() => editAgent(id)}>Editar perfil</button>
      ) : null}
    </div>
  );
}
