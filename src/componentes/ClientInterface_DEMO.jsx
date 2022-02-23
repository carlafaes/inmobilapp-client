import React, { useState } from "react";
import updateInfo from "../services/client";

const ClientInterface_DEMO = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [age, setAge] = useState(user.age);
  const { token } = user;
  const clientID = user.id;
  const userInfo = {
    name,
    address,
    password,
    newPassword,
    phone,
    age,
  };

  const sendInfo = async (e) => {
    e.preventDefault();

    if (userInfo.password.length === 0)
      return alert("Please enter your password");

    await updateInfo(userInfo, clientID, token);
  };

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
          required="true"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <input
          type="password"
          placeholder="New password"
          required="true"
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
        <input
          type="text"
          placeholder="Age"
          autoComplete="on"
          value={age}
          name="age"
          onChange={({ target }) => setAge(target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ClientInterface_DEMO;
