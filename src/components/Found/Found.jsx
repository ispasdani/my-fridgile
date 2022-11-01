/*
    written by Josip Brljevic
    A component that displays the matching items from your items in the fridge with the recipe items
*/
import AddIcon2 from "../../assets/recipesimages/add3.png";
import Checked from "../../assets/recipesimages/checked.png";
import { useState } from "react";

export default function Found() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const checkbox = isChecked ? Checked : AddIcon2;

  const re = /, ?|\n/gm;

  const recipestorage = localStorage.getItem("recipedata");
  let recipeitems = recipestorage.split(re);

  const myitemsstorage = localStorage.getItem("name");
  let myitems = myitemsstorage.split(re);

  let foundlist = [];

  for (let i = 0; i < recipeitems.length; i++) {
    for (let j = 0; j < myitems.length; j++) {
      if (recipeitems[i] === myitems[j]) foundlist.push(recipeitems[i]);
    }
  }

  foundlist.sort();

  return (
    <div className="itemflex">
      {foundlist.map((found, index) => (
        <div className="itemflexbox" key={index}>
          <img src={checkbox} alt="add" onClick={toggleCheck} />
          <p>{found}</p>
        </div>
      ))}
    </div>
  );
}
