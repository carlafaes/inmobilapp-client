import React, { useState, useEffect } from "react";
import updateInfo from "../../services/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './ClientInterface.css'
import { NavbarClient } from '../navbars/NavbarClient'
import { useDispatch, useSelector } from "react-redux";
import services from '../../services/client'
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from 'react-icons/bs'
import { CardMinmueble } from "./cards/CardMinmueble";


import { CardNoHayInmueble } from "./cardNoHayInmueble/CardNoHayInmueble";
import { BotonUp } from "./botones/BotonUp";
import { BotonClose } from "./botones/BotonClose";
export const ClientInterface = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [actualToken, setActualToken] = useState("");
  const clientID = user ? user.id : null;
  const [open, setOpen]=useState(false)


  useEffect(async() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    if (user) {
      setUser(user);
      setActualToken(user.token);

      const notify = () =>
        toast.success(`Bienvenid@ ${user.name}!`, {
          icon: "👋"
        });
      notify(user.name);
    }

    return (
      <div className="div">
        <h1 >You must be login to see this interface</h1>
        <button onClick={() => navigate("/login")}>Click to login</button>
      </div>
    );
  }, []);

  if (!actualToken) {
    return (
      <>
        <h1>You must be login to see this interface</h1>
        <button onClick={() => navigate("/login")}>Click to login</button>
      </>
    );
  }

  const openMenu=()=>{
    setOpen(true)
  }
  const closeMenu=()=>{
    setOpen(false)
  }
  return (
    <>
      <NavbarClient setUser={setUser} setActualToken={setActualToken} user={user} />
      <div className="container">
        <h2>Mi inmueble</h2>
        <div className="container_pagos">
        {
          open?<BotonClose closeMenu={closeMenu} />:<BotonUp openMenu={openMenu}/>
        }
          <span>Nombre del propietario: {user.name}</span>
          <span>Dia de pago: {user.payDay} del mes presente</span> 
        </div>
        {
          open && <CardMinmueble/>
        }
        
      </div>
    </>
  );
};

