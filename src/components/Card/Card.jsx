import React from "react";
import "./Card.css";

export default function Card({ icon, title }) {
  return (
    <div className="card-category">
      <div className="category-icon">
        <img src={icon} alt="category icon"></img>
      </div>

      <div className="category-title">
        <p>{title}</p>
      </div>
    </div>
  );
}
