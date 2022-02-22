import React from "react";
import CardAgent from "../CardAgent";

export default function CardsAgent({ agents }) {
  return (
    <div>
      {agents.map(({ name, age, phone, id }) => {
        return <CardAgent key={id} name={name} age={age} phone={phone} />;
      })}
    </div>
  );
}
