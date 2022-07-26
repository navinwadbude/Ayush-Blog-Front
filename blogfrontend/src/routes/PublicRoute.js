import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}

export default PublicRoute;
