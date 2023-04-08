import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container">
      <div className="app" >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
