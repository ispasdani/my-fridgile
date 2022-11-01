/*
    written by Josip Brljevic
    A component that displays the ingredients of the recipe that you clicked on (you click on the black button at the top of the box)
    It gets ingredients from the local storage.
    The ingredients were saved with the onClick function on a previous component
*/
import AddIcon2 from "../../assets/recipesimages/add3.png";
import Checked from "../../assets/recipesimages/checked.png";
import { useState } from "react";

export default function LocalStorageDisplay() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const checkbox = isChecked ? Checked : AddIcon2;

  const re = /, ?|\n/gm;
  const storage = localStorage.getItem("recipedata");

  let words = storage.split(re);

  words.sort();

  return (
    <div className="itemflex">
      {words.map((word, index) => (
        <div className="itemflexbox" key={index}>
          <img src={checkbox} alt="add" onClick={toggleCheck} />
          <p>{word}</p>
        </div>
      ))}
    </div>
  );
}
