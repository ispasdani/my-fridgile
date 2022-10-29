/* 
  written by Josip Brljevic 
  A heart icon component that is placed in the top right corner of every recipe.
  It can be toggled
*/
import Heart from "../../assets/recipesimages/heart.svg";
import Saved from "../../assets/recipesimages/saved.svg";
import React, { useState } from "react";
import "./HeartIcon.css";

export default function HeartIcon() {
  const [isChecked, setIsChecked] = useState(false);

  //a function that will toggle the heart icon
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  const checkbox = isChecked ? Saved : Heart;

  return (
    <div className="HeartIcon" onClick={toggleCheck}>
      <img src={checkbox} alt="heart" />
    </div>
  );
}
