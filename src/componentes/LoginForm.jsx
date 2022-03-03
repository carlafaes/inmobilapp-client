import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import GoogleLogin from "react-google-login";

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
      <div className="auth_main">
        <div className="auth_box-container">
          <h3 className="auth_title">Login</h3>
          <form onSubmit={handleLogin} className="form">
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
            <button className=" btn">Login</button>
            <GoogleLogin
              clientId="207561397241-v7ceqk4t819s7l8k2u87p2vfq86sb0lj.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={respuestaGoogle}
              onFailure={respuestaGoogle}
              cookiePolicy={"single_host_origin"}
              //   onChange={({ target }) => setPassword(target.value)}
            />
            <Link to="/register" className="link">
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
