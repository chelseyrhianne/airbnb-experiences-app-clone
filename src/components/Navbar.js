import React from "react";
import "../styles/Navbar.css";
import logo from "../images/airbnb.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <img className="logo" src={logo} alt="Airbnb logo" />
    </nav>
  );
}
