import React, { useEffect, useState } from "react";
import "./RecipeWidget.css";
import Graphic from "../../assets/images/man.svg";

export default function AppWidget() {
  return (
    <div className="recipe-widget">
      <div className="text">
        <div className="headline">
          <p>Recipes</p>
        </div>
        <div className="b-text">
          <p>
            Struggling with deciding what to cook? See recommended recipes based
            on food items you have in your fridge.
          </p>
        </div>
        <div className="recipes-btn">
          <button>Go to recipes</button>
        </div>
      </div>
      <div className="graphic">
        <img src={Graphic} alt="graphic"></img>
      </div>
    </div>
  );
}
