import React from "react";
import axios from "axios";

import { BASE_URL } from "../URL/utils";
const apiAction = (obj) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/signup`, obj)
      .then((res) => {
        console.log(res, "guighiugig1111111111111");
        dispatch({
          type: "API_CALLING",
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message, "KKKKKKKKK");
      });
  };
};
const apiLogin = (obj) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/login`, obj, { withCredentials: true })
      .then((res) => {
        const token = res.data.token;
        console.log(res.data);

        localStorage.setItem("accessToken", token);

        dispatch({
          type: "LOGIN",
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error.response.data.message, "KKKKKKKKK");
      });
  };
};

export { apiAction, apiLogin };
