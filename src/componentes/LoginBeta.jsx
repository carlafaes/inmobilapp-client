import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoWithToken } from "../redux/actions/actionUser";
import { getUserForLocalStorage } from "../utils/user";

const LoginBeta = () => {
  const [dni, setDNI] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userWithToken = useSelector((state) => state.reducerUsers.users);

  useEffect(() => {
    const user = getUserForLocalStorage();
    if (user) {
      user.role === "ADMIN"
        ? navigate("/viewAdmin")
        : user.role === "CLIENT"
        ? navigate("/viewClient")
        : user.role === "AGENT"
        ? navigate("viewAgent")
        : null;
    }
  }, []);

  useEffect(() => {
    userWithToken.role === "CLIENT" || userWithToken.role === "Client"
      ? navigate("/viewClient")
      : userWithToken.role === "ADMIN"
      ? navigate(`/viewAdmin`)
      : userWithToken.role === "AGENT"
      ? navigate("/viewAgent")
      : null;
  }, [userWithToken]);

  useEffect(() => {
    if (email) {
      dispatch(getUserInfoWithToken({ email }));
      setEmail("");
    }
  }, [email]);

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
        setEmail={setEmail}
      />
      <Footer />
    </>
  );
};

export default LoginBeta;
