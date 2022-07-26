import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import moment from "moment";
import { BASE_URL } from "../URL/utils";
import img from "../image/pic.jpg";
axios.withCredentials = true;
const Home = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const data = useLocation();
  const detail = data.state;
  const navigate = useNavigate();

  // const decode = jwt_decode(detail);
  // console.log("decode",decode);

  // console.log('exp', decode.exp);
  // console.log('aaaaaaaaaaaa', moment(decode.exp).format('mm')  );

  // const expTime = moment(decode.exp).format('mm');

  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/getUserData`, {
  //       headers: { Authorization: `Bearer ${detail}` },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("----------------->", error);
  //     });
  // }, []);

  const Logout = async () => {
    try {
      await axios.delete(`${BASE_URL}/logout`, { withCredentials: true });
      console.log("===========>");
      await localStorage.removeItem("accessToken");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    const userToken = await localStorage.getItem("accessToken");
    if (!userToken) return navigate("/");
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
          // const decoded = jwt_decode(responses.data.accessToken);
          // setName(decoded.name);
        } else if (response.data.msg) {
          await localStorage.removeItem("userToken");
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/contact"
                >
                  Contact
                </a>
                <div className="button">
                  <button className="buttonp" onClick={Logout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div></div>
        <div className="bgimage">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
