import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAgent } from "../../redux/actions/actions-agent";
import { setAdminDetailsAgents } from "../../redux/actions/actions-admin";
import { isDone, validatePutAdmin } from "../../utils/errorsFormAdmin";
import agentService from "../../services/agent";
import adminService from "../../services/admin";

import styled from "./PutAgent.module.css";
import { getUserForLocalStorage } from "../../utils/user";

export default function PutAgent({ id }) {
  const agent = useSelector((state) => state.reducerAgent.agent);
  const dispatch = useDispatch();

  const [error, setError] = useState({});

  if (!agent) {
    return null;
  }

  const handleChange = (e) => {
    dispatch(setAgent({ ...agent, [e.target.name]: e.target.value }));
    setError(validatePutAdmin({ ...agent, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    if (e.target.name === "DONE") {
      if (isDone(error)) {
        if (confirm("Seguro que desea hacer estos cambios?")) {
          const { token } = getUserForLocalStorage();
          agentService
            .putAgentID(agent.id, agent, token)
            .then(() => {
              alert("done!");
            })
            .catch(() => {
              alert("No tienes autorizacion para esto!");
            });
          adminService.getAdminIdAgentDetails(id).then((data) => {
            dispatch(setAdminDetailsAgents(data));
          });
          dispatch(setAgent(null));
        }
      } else {
        alert("Completa correctamente los campos");
      }
    } else {
      if (confirm("Seguro? no se guardaran los cambios!")) {
        dispatch(setAgent(null));
      }
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className={error.name ? styled.error : styled.done}
        type="text"
        value={agent.name}
        onChange={handleChange}
        name="name"
      />
      <input
        className={error.address ? styled.error : styled.done}
        type="text"
        value={agent.address}
        onChange={handleChange}
        name="address"
      />
      <input
        className={error.phone ? styled.error : styled.done}
        type="text"
        value={agent.phone}
        onChange={handleChange}
        name="phone"
      />
      <input
        className={error.age ? styled.error : styled.done}
        type="text"
        value={agent.age}
        onChange={handleChange}
        name="age"
      />
      <button name="DONE" onClick={handleSubmit}>
        terminar
      </button>
      <button onClick={handleSubmit}>cancelar</button>
    </form>
  );
}
