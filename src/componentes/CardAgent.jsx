import React from "react";

export default function CardAgent({ name, age, phone }) {

  return (
    <div>
      <button onClick={() => console.log("Deleted")}>DELETE</button>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{phone}</h3>
      <button onClick={() => console.log("Put")}>PUT</button>
    </div>
  );
}
