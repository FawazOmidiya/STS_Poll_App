import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="OutletWrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
