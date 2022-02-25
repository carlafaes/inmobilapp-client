import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LoginForm = ({ dni, setDNI, password, setPassword, handleLogin }) => {
  return (
    <>
      <Navbar />
      <div className="auth_main">
        <div className="auth_box-container">
          <div className="login">
            <h3 className="auth_title">Login</h3>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="Number"
              placeholder="DNI"
              autoComplete="on"
              value={dni}
              onChange={(e) => setDNI(e.target.value)}
              className="auth_input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="auth_input"
            />

            <div className="hola">
              <button className="btn-primary btn">Login</button>
              <Link to="/register" className="link">
                Create new account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
