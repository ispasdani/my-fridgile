/*
    written by Josip Brljevic
    A component that displays the matching items from your items in the fridge with the recipe items
*/

import "./Missing.css";
import AddIcon2 from "../../assets/recipesimages/add3.png";
import Checked from "../../assets/recipesimages/checked.png";
import { useState } from "react";

export default function Missing() {
  //the toggle is switching ALL the icons for some reasons

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  let checkbox = isChecked ? Checked : AddIcon2;

  const re = /, ?|\n/gm;

  const recipestorage = localStorage.getItem("recipedata");
  let recipeitems = recipestorage.split(re);

  const myitemsstorage = localStorage.getItem("name");
  let myitems = myitemsstorage.split(re);

  let missingList = recipeitems;

  for (let i = 0; i < recipeitems.length; i++) {
    for (let j = 0; j < myitems.length; j++) {
      if (recipeitems[i] === myitems[j]) {
        delete missingList[i];
      }
    }
  }

  missingList.sort();

  return (
    <div className="itemflex">
      {missingList.map((misssing, index) => (
        <div className="itemflexbox" key={index}>
          <img src={checkbox} alt="add" onClick={toggleCheck} />
          <p>{misssing}</p>
        </div>
      ))}
    </div>
  );
}
