import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

import React from "react";

const index = () => {
  const [username, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("https://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  };

  const getUsers = async () => {
    const userToken = await localStorage.getItem("userToken");
    if (!userToken) return history.push("/");
    try {
      const response = await axios.get("http://localhost:5000/getUserData", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (response.data[0]) {
        setName(response.data[0].name);
        // setUsers(response.data);
      } else if (response.data.msg) {
        const responses = await axios.get("http://localhost:5000/token", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        await localStorage.setItem("userToken", responses.data.accessToken);
        if (responses.data.accessToken) {
          setToken(responses.data.accessToken);
          const decoded = jwt_decode(responses.data.accessToken);
          setName(decoded.name);
        } else if (response.data.msg) {
          await localStorage.removeItem("userToken");
          history.push("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return <div>
  <h1>Welcome Back: {username}</h1>
  </div>;
};

export default index;
