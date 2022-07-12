import React, { useState } from "react";
import { Link } from "react-router-dom";

import { isEmailValidation, isPasswordValidation } from "../utils/utils";

const Login = () => {
  const [email, setEmail] = useState({
    value: "",
    errorEmsg: "",
  });

  const [password, setPassword] = useState({
    value: "",
    errorEmsgs: "",
  });

  const handleEmail = (event) => {
    setEmail({
      value: event.target.value,
      errorEmsg: isEmailValidation(event.target.value) ? "invalid email" : "",
    });
  };

  const handlePassword = (event) => {
    setPassword({
      value: event.target.value,
      errorEmsgs: isPasswordValidation(event.target.value)
        ? "length is less than 6"
        : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("datZ", e.target.name);
  };
  return (
    <div>
      <div className="login">
        <span className="loginTitle">Login page</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your email..."
            name="userDetail"
            onChange={(event) => handleEmail(event)}
          />
          <span style={{ color: "red" }}> {email.errorEmsg}</span>
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            name="password"
            onChange={(event) => handlePassword(event)}
          />
          <span style={{ color: "red" }}> {password.errorEmsgs}</span>
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
        <Link to={"/"} className="registerLoginButton">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
