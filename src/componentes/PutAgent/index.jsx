import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";

export default function PutAgent() {
  const agent = useSelector((state) => state.reducerAgent.agent);

  if (!agent) {
    return <Loading />;
  }

  return <h1>{agent.name}</h1>;
}
