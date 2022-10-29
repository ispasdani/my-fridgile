/*
    writen by Josip Brljevic
    A component that displays the items from your fridge when you press the top right button on the Recipe page
*/

import { useState } from "react";
import AddIcon from "../../assets/recipesimages/add.svg";
import MinusQuantity from "../../assets/recipesimages/minus.svg";
import PlusQuantity from "../../assets/recipesimages/plus.svg";
import Checked from "../../assets/recipesimages/checked.svg";
import "./recipeproducts.css";

export default function RecipeProduct() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const checkbox = isChecked ? Checked : AddIcon;

  return (
    <div className="recipeproduct">
      <div className="addicon">
        <img src={checkbox} alt="add" onClick={toggleCheck}></img>
      </div>
      <div className="recipeproductdata">
        <p>Map the data here</p>
      </div>

      <div className="quantity">
        <img
          style={{ cursor: "pointer" }}
          onClick={decrementCounter}
          src={MinusQuantity}
          alt="minus"
        />

        <div className="counter">
          <p>{counter}</p>
        </div>

        <img
          style={{ cursor: "pointer" }}
          onClick={incrementCounter}
          src={PlusQuantity}
          alt="plus"
        />
      </div>
    </div>
  );
}
