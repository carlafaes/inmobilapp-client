import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardPropertyAgent from "../CardPropertyAgent";
import AddBoxIcon from "@mui/icons-material/AddBox";

import classes from "./PanelAgent.module.css";
import CardClient from "../CardClient";

export default function PanelAgent({ agent, token }) {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.appBar}>
        <Button
          sx={{ backgroundColor: "#faa222" }}
          onClick={() => navigate("/create-property")}
          variant="contained"
          endIcon={<AddBoxIcon />}
        >
          Crear propiedad
        </Button>
      </div>
      <div className={classes.content}>
        {agent.properties.map((property) => {
          return <CardPropertyAgent key={property.id} {...property} />;
        })}
      </div>
      <div>
        <h2 className={classes.title}>Clientes</h2>
      </div>
      <div className={classes.content}>
        {agent.clientsID.map((client, index) => {
          return <CardClient key={index} {...client} token={token} />;
        })}
      </div>
    </div>
  );
}
