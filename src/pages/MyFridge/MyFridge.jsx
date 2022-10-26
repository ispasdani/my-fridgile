import React, { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Card } from "../../components/Card/Card.jsx";
import Carrot from "../../assets/images/carrot.svg";
import Banana from "../../assets/images/banana.svg";
import Dairy from "../../assets/images/dairy.svg";
import Meat from "../../assets/images/meat.svg";
import Fish from "../../assets/images/fish.svg";
import Plus from "../../assets/images/plus.svg";
import "./myFridge.css";
import { v4 as uuidv4 } from "uuid";
import { RecipesWidget } from "../../components/RecipesWidget/RecipesWidget.jsx";
import { DownloadWidget } from "../../components/DownloadWidget/DownloadWidget.jsx";

export function Myfridge() {
  return (
    <div className="myFridge">
      <div className="fridgeLeftSide">
        <div className="fridgeTitle">
          <p>My Fridge</p>
        </div>
        <div className="fridgeSubTitle">
          <p>Click on the category to see and add items</p>
        </div>
        <div className="fridgeCategories">
          <Card icon={Carrot} title={"Vegetables"} />
          <Card icon={Banana} title={"Fruits"} />
          <Card icon={Dairy} title={"Dairy"} />
          <Card icon={Meat} title={"Meat"} />
          <Card icon={Fish} title={"Fish"} />
        </div>
      </div>
      <div className="fridgeRightSide">
        <DownloadWidget />
        <RecipesWidget />
      </div>
    </div>
  );
}
