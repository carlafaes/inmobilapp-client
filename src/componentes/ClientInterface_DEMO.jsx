import React, { useState, useEffect } from "react";
import clientService from "../services/client";
import { useNavigate } from "react-router-dom";

const ClientInterface_DEMO = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [actualToken, setActualToken] = useState("");
  const [completeInfoClient, setCompleteInfoClient] = useState("");
  const userInfo = {
    name,
    address,
    password,
    newPassword,
    phone,
  };

  useEffect(async () => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    const user = JSON.parse(loggedUserJSON);
    if (user) {
      setUser(user);
      setActualToken(user.token);
      const info = await clientService.getClientInfo(user.id);
      setCompleteInfoClient(info);
      // setName(user.name);
      // setAddress(user.address);
      // setPhone(user.phone);
    }
    return (
      <>
        <h1>You must be login to see this interface</h1>
        <button onClick={() => navigate("/login")}>Click to login</button>
      </>
    );
  }, []);

  const sendInfo = async (e) => {
    e.preventDefault();

    if (userInfo.password.length === 0)
      return alert("Please enter your password");

    await clientService.updateInfo(userInfo, actualToken);
  };

  const handleLogout = () => {
    setUser(null);
    setActualToken("");
    window.localStorage.removeItem("loggedUser");
    navigate("/");
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
      <h1>Formulario para actualizar datos</h1>
      <form onSubmit={sendInfo}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="on"
          value={name}
          name="name"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required={true}
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <input
          type="password"
          placeholder="New password"
          required={true}
          value={newPassword}
          name="newPassword"
          onChange={({ target }) => setNewPassword(target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          autoComplete="on"
          value={address}
          name="address"
          onChange={({ target }) => setAddress(target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          autoComplete="on"
          value={phone}
          name="phone"
          onChange={({ target }) => setPhone(target.value)}
        />
        <button type="submit">Submit</button>
        <button onClick={handleLogout}>Logout</button>
      </form>
    </>
  );
};

export default ClientInterface_DEMO;
