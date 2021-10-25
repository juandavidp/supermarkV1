import React from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../actions/auth";
import "../assets/styles/login.scss";
import GoogleButton from "react-google-button";

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };
  return (
    <div className="container1">
      <h2 className="title">Login</h2>
      <hr />
      <div>
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
      <hr />
      <h2>SuperMark</h2>
    </div>
  );
};

export default Login;
