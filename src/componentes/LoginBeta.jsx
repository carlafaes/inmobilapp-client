import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoWithToken } from "../redux/actions/actionUser";

const LoginBeta = () => {
  const [dni, setDNI] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userWithToken = useSelector((state) => state.reducerUsers.users);

  useEffect(() => {
    userWithToken.role === "Client" ? navigate("/viewClient") : null;
  }, [userWithToken]);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (dni && password) {
      dispatch(getUserInfoWithToken({ dni, password }));
      setDNI("");
      setPassword("");
    }
  };

  if (userWithToken.token) {
    window.localStorage.setItem("loggedUser", JSON.stringify(userWithToken));
  }

  return (
    <>
      <LoginForm
        dni={dni}
        setDNI={setDNI}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <Footer />
    </>
  );
};

export default LoginBeta;
