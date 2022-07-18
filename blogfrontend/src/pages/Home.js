import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";


import img from "../image/pic.jpg";
const Home = () => {
 
  const data = useLocation();
  const detail = data.state;
  const dec = jwt_decode(detail);
 

  useEffect(() => {
    
     axios
    .get("http://localhost:5000/getUserData", {
      headers: { Authorization: `Bearer ${detail}` },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  

  return (
  
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              
            </a>  
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
                <a className="nav-link active"  aria-current="page" href="/about">
                 About
                </a>
                <a className="nav-link active" aria-current="page" href="/contact">
                  Contact
                </a>
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="bgimage">
          <img src={img} alt="" />
        </div>
      </div>
 
  );
};

export default Home;
