import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from "jwt-decode";

import { isEmailValidation, isPasswordValidation } from "../utils/utils";

const Login = () => {
  const [Succes, setSucces] = useState();
  const [email, setEmail] = useState({
    value: "",
    errorEmsg: "",
  });

  const navigate = useNavigate();

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
    const obj = {
      email: email.value,
      password: password.value,
    };
    axios
      .post("http://localhost:5000/login", { ...obj })
      .then(async (res) => {
        const token = res.data.token;
        const user = await jwt(token);
        console.log(token, "gfxcgfdghdfjh");
        console.log(res);
        setSucces(res.data.message);

        localStorage.setItem("accessToken", token);
        navigate("/home", { replace: true,useData:res.data});
      })
      .catch((error) => {
        console.log(error.message, "sdgdgggg");
        setSucces(error.message);
        // console.log(error);
      });
     
  };
  return (
    <div>
      <div className="login">
        <span className="loginTitle">Login page</span>
        <span style={{ color: "red" }}>{Succes}</span>
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
