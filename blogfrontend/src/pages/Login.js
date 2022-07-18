import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



import { isEmailValidation, isPasswordValidation } from "../utils/utils";


const Login = () => {
  const [Succes, setSucces] = useState();
  const [tokens, setTokens] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      email: email.value,
      password: password.value,
    };
    await axios
      .post("http://localhost:5000/login", { ...obj })
      .then((res) => {
        const token = res.data.token;
        console.log(res.data)
        setTokens(token);
        setSucces(res.data.message);
        localStorage.setItem("accessToken", token);
        navigate("/home", { replace: true, useData: res.data, state: token });
      })
      .catch((error) => {
        console.log(error.message, "sdgdgggg");
        setSucces(error.message);
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
        <Link to={"/signup"} className="registerLoginButton">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
