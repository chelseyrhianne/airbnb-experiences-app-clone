import React from "react";
import "../styles/Card.css";
import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="Card">
      <img className="card-image" src={katie} alt="Katie Zaferes" />
      <div className="card-stats">
        <img className="card-star" src={star} alt="Star" />
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
