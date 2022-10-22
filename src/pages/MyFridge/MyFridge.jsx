import React from "react";
import Card from "../../components/Card/Card.jsx";
import Carrot from "../../assets/images/carrot.svg";
import Banana from "../../assets/images/banana.svg";
import Dairy from "../../assets/images/dairy.svg";
import Meat from "../../assets/images/meat.svg";
import Fish from "../../assets/images/fish.svg";
import Plus from "../../assets/images/plus.svg";
import "./myFridge.css";

export function Myfridge() {
  return (
    <div className="page">
      <div className="left-side">
        <div className="headline">
          <p>My fridge</p>
        </div>

        <div className="body-text">
          <p>Click on the category to see and add items.</p>
        </div>
        <div className="grid-container">
          <Card icon={Carrot} title="Vegetables" />

          <Card icon={Banana} title="Fruits" />

          <Card icon={Dairy} title="Dairy" />

          <Card icon={Meat} title="Meat" />

          <Card icon={Fish} title="Fish and seafood" />
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
}
