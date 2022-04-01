import React from "react";
import "../styles/Hero.css";
import grid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="Hero">
      <img
        className="photo-grid"
        src={grid}
        alt="Selection of online experiences hosted by AirBnb"
      />
      <h1 className="hero-header">Online experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
