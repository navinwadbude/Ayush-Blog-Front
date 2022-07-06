import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  // if(username===""){
  //  alert("enter name")
  // }

  const handlChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserName({
      ...username,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("datZ", e.target.name);
    if (!username.username) {
      alert("Enter your  username");
    } else if (!username.email) {
      alert("Enter your  email");
    } else if (!username.password) {
      alert("Enter your password");
    } else if (!username.cpassword) {
      alert("Enter your confirm password");
    }
  };

  return (
    <div>
      <div className="register">
        <h2>Signup page</h2>

        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            name="username"
            value={username.username}
            onChange={handlChange}
          />
          <label>Email</label>
          <input
            type="text"
            className="registerInput"
            placeholder="Enter your email..."
            name="email"
            value={username.email}
            onChange={handlChange}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            name="password"
            value={username.password}
            onChange={handlChange}
          />

          <label>Confirm Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            name="cpassword"
            value={username.cpassword}
            onChange={handlChange}
          />
          <button className="registerButton" type="submit">
            SIGNUP
          </button>
        </form>
        <Link to={"/login"} className="registerLoginButton">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
