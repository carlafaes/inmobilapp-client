import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import GoogleLogin from "react-google-login";
import "./LoginForm/LoginForm.css";

const LoginForm = ({
  dni,
  setDNI,
  password,
  setPassword,
  handleLogin,
  setEmail,
}) => {
  const respuestaGoogle = ({ profileObj }) => setEmail(profileObj.email);

  return (
    <>
      <Navbar />
      <div className="login-form__auth-main">
        <div className="login-form__auth_box-container">
          <h3 className="auth_title">Login</h3>
          <form onSubmit={handleLogin} className="login-form__form">
            <input
              type="text"
              placeholder="Dni/Email"
              autoComplete="off"
              value={dni}
              onChange={(e) => setDNI(e.target.value)}
              className="login-form__auth_input input_ancho"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="login-form__auth_input input_ancho"
            />
            <button className="login-form__btn">Login</button>
            <GoogleLogin
              clientId="207561397241-v7ceqk4t819s7l8k2u87p2vfq86sb0lj.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={respuestaGoogle}
              onFailure={respuestaGoogle}
              cookiePolicy={"single_host_origin"}
              //   onChange={({ target }) => setPassword(target.value)}
            />
            <Link to="/register" className="login-form__link">
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
