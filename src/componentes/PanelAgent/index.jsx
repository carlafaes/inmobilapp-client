import { IconButton } from "@mui/material";
import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CardPropertyAgent from "../CardPropertyAgent";

import classes from "./PanelAgent.module.css";

export default function PanelAgent({ agent }) {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.appBar}>
        <IconButton onClick={() => navigate("/create-property")}>
          <BsFillPlusSquareFill />
        </IconButton>
      </div>
      <div className={classes.content}>
        {agent.properties.map((property) => {
          return <CardPropertyAgent key={property.id} {...property} />;
        })}
      </div>
    </div>
  );
}
