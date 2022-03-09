import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CardPropertyAgent from "../CardPropertyAgent";
import axios from "axios";
import { msg } from "../../templates/ClientSuscribe";
import classes from "./PanelAgent.module.css";
import Modal from './Modal/Modal'

export default function PanelAgent({ agent }) {
  const navigate = useNavigate();
  const [send, setSend]=useState(false);
  

  
  
  const seAlquiloPropiedad = (name, email, property) => {
    console.log(property);
    axios.post("/api/sendemail", {
      email,
      name,
      template: msg(name, email, property),
    });
    setTimeout(() => {
      setSend(true)
    }, 1000);
    
  };


  const [input, setInput] = useState({
    name: "Dairo",
    email: "garcianaranjodairo@gmail.com",
    agentID: 123,
  });

  return (
    <div className={classes.container}>
      <div className={classes.appBar}>
        <IconButton onClick={() => navigate("/create-property")}>
          <BsFillPlusSquareFill />
        </IconButton>
        <button
          onClick={() =>
            seAlquiloPropiedad(
              "Car",
              "carlaf2193@gmail.com",
              agent.properties[0]
            )
          }
        >
          
          enviar
        </button>
      </div>
      <div className={classes.content}>
        {agent.properties.map((property) => {
          return <CardPropertyAgent key={property.id} {...property} />;
        })}
      </div>
      {send && <Modal send={setSend}/>}
     
    </div>
  );
  }

  
