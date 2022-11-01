/*
    writen by Josip Brljevic
    A component that displays the items from your fridge when you press the top right button on the Recipe page
*/

import { useState } from "react";
import AddIcon2 from "../../assets/recipesimages/add3.png";
import Checked from "../../assets/recipesimages/checked.png";
import "./recipeproducts.css";

export default function RecipeProduct(props) {
  const [display1, setDisplay1] = useState(true);

  const displayCheck = (e) => {
    setDisplay1(!display1);

    document.getElementById("empty").classList.add("hidden");

    //this part moves the clicked item to the div on the prodcuts page by using the function append()
    let tagg = document.getElementById(props.tag);
    document.getElementById("selected").append(tagg);
  };

  return (
    <div>
      {display1 ? (
        <div className="recipeproduct" id={props.tag}>
          <div className="addicon">
            <img src={AddIcon2} alt="add" onClick={displayCheck} id="ajj"></img>
          </div>
          <div className="recipeproductdata">
            <p>{props.name}</p>
          </div>
          <div className="expirationtime">
            <p>{props.time} days left</p>
          </div>
        </div>
      ) : (
        <div className="recipeproduct">
          <div className="addicon">
            <img src={Checked} alt="add"></img>
          </div>
          <div className="recipeproductdata">
            <p>{props.name}</p>
          </div>
          <div className="expirationtime">
            <p>{props.time} days left</p>
          </div>
        </div>
      )}
    </div>
  );
}
