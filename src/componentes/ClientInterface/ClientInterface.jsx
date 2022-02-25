import React, { useState, useEffect } from "react";
import updateInfo from "../../services/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './ClientInterface.css'
import { NavbarClient } from '../navbars/NavbarClient'
import { useDispatch, useSelector } from "react-redux";
import services from '../../services/client'
import { CardMinmueble } from "./cards/CardMinmueble";
export const ClientInterface = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [actualToken, setActualToken] = useState("");
  
  const clientID = user ? user.id : null;


  useEffect(async() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    if (user) {
      setUser(user);
      setActualToken(user.token);

      const notify = () =>
        toast.success(`welcome ${user.name}!`, {
          icon: "👋",
          theme: "dark",
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
  // console.log(completeInfoClient);
  return (
    <>
      <NavbarClient setUser={setUser} setActualToken={setActualToken} user={user} />
      <div>
      <h2>Mi inmueble</h2>
      <CardMinmueble/>
      </div>
    </>
  );
};

