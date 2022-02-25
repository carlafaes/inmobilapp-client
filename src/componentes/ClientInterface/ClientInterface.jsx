import React, { useState, useEffect } from "react";
import updateInfo from "../../services/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './ClientInterface.css'
import { NavbarClient } from '../navbars/NavbarClient'
import { useDispatch, useSelector } from "react-redux";
import { cleanActiveUser, ClientById } from "../../redux/actions/actionClient";
export const ClientInterface = () => {

  const userId=useSelector((state)=>state.userId)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [actualToken, setActualToken] = useState("");
  const clientID = user ? user.id : null;
  
 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    if (user) {
      setUser(user);
      setActualToken(user.token);
      // setName(user.name);
      // setAddress(user.address);
      // setPhone(user.phone);
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

  // useEffect(() =>{
  //   const user= window.localStorage.getItem("loggedUser")
  //   const userId = JSON.parse(user)
  //   console.log()
  //   dispatch(ClientById(userId.id))
  // })
  // console.log(userId)
  const handleLogout = () => {
    setUser(null)
    setActualToken('')
    window.localStorage.removeItem("loggedUser");
};


  if (!actualToken) {
    return (
      <>
        <h1>You must be login to see this interface</h1>
        <button onClick={() => navigate("/login")}>Click to login</button>
      </>
    );
  }

  return (
    <>
      <NavbarClient setUser={setUser} setActualToken={setActualToken} user={user} />
    </>
  );
};

