import React from "react";
import CardAgent from "../CardAgent";

import styled from "./CardsAgent.module.css";

export default function CardsAgent({ agents }) {
  return (
    <div className={styled.cards}>
      {agents.map((agent) => {
        return <CardAgent key={agent.id} agent={agent} />;
      })}
    </div>
  );
}
