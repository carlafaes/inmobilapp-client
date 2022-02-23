import React, { useState } from "react";
import Navbar from "./Navbar";
import loginService from "../services/login";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import ClientInterface_DEMO from "./ClientInterface_DEMO";

const LoginBeta = () => {
  const [dni, setDNI] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        dni,
        password,
      });
      setUser(user);
      setDNI("");
      setPassword("");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Navbar />
      {user ? (
        <ClientInterface_DEMO user={user} />
      ) : (
        <LoginForm
          dni={dni}
          setDNI={setDNI}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
      <Footer />
    </>
  );
};

export default LoginBeta;
