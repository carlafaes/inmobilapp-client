import React from "react";
import CardAgent from "../CardAgent";

import styled from "./CardsAgent.module.css";

export default function CardsAgent({ agents, crudAgent, deleteAgent, editAgent }) {
  return (
    <div className={styled.cards}>
      {agents.map(({ name, age, phone, id }) => {
        return (
          <CardAgent
            key={id}
            name={name}
            age={age}
            phone={phone}
            id={id}
            crudAgent={crudAgent}
            deleteAgent={deleteAgent}
            editAgent={editAgent}
          />
        );
      })}
    </div>
  );
}
