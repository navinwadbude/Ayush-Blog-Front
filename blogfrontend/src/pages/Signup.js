import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { signup } from "../URL/utils";

import {
  userNameValidation,
  isEmailValidation,
  isPasswordValidation,
  checkConfirmation,
} from "../utils/utils";
const Signup = () => {
  const [Succes, setSucces] = useState(null);
  const [name, setName] = useState({
    value: "",
    errorMessage: "",
  });
  const [email, setEmail] = useState({
    value: "",
    errorEmsg: "",
  });
  const [password, setPassword] = useState({
    value: "",
    errorEmsgs: "",
  });

  const [cpassword, setCpassword] = useState({
    value: "",
    errorEm: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = checkConfirmation(password.value, cpassword.value);
    console.log(res, "res");
    res
      ? setPassword({
          value: "",
          errorEmsgs: " ",
        })
      : setCpassword({
          value: "",
          errorEm: "password not matches",
        });

    console.log("username++++++", {
      name: name.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
    });
    const obj = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    console.log("obj------>", obj);

    axios
      .post(signup, obj)
      .then((res) => {
        console.log(res, "guighiugig");
        setSucces(res.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.message, "KKKKKKKKK");
      });
  };

  const handleName = (event) => {
    setName({
      value: event.target.value,
      errorMessage: userNameValidation(event.target.value)
        ? "name must greater than 3"
        : "",
    });
  };
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

  const handleCpassword = (event) => {
    setCpassword({
      value: event.target.value,
      errorEm: isPasswordValidation(event.target.value)
        ? "length is less than 6"
        : "",
    });
  };

  return (
    <div>
      <div className="register">
        <h2>Signup page</h2>
        <span style={{ color: "red" }}>{Succes}</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            name="username"
            value={name.value}
            onChange={(event) => handleName(event)}
          />
          <span style={{ color: "red" }}> {name.errorMessage} </span>

          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            name="email"
            value={email.value}
            onChange={(event) => handleEmail(event)}
          />
          <span style={{ color: "red" }}> {email.errorEmsg}</span>
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            name="password"
            value={password.value}
            onChange={(event) => handlePassword(event)}
          />
          <span style={{ color: "red" }}> {password.errorEmsgs}</span>
          <label>Confirm Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            name="cpassword"
            value={cpassword.value}
            onChange={(event) => handleCpassword(event)}
          />
          <span style={{ color: "red" }}> {cpassword.errorEm}</span>
          <button className="registerButton" type="submit">
            SIGNUP
          </button>
        </form>
        <Link to={"/"} className="registerLoginButton">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
