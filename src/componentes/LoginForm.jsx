import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LoginForm = ({ dni, setDNI, password, setPassword, handleLogin }) => {
  return (
    <>
      <Navbar />
      <div className="auth_main">
        <div className="auth_box-container">
            <h3 className="auth_title">Login</h3>
          <form onSubmit={handleLogin} className='form'>
            <input
              type="Number"
              placeholder="DNI"
              autoComplete="on"
              value={dni}
              onChange={(e) => setDNI(e.target.value)}
              className="auth_input input_ancho"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="auth_input input_ancho"
            />

            <div className="hola btn_button">
              <button className=" btn">Login</button>
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
