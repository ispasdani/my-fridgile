/*  
  written by Josip Brljevic
  A recipe component ONLY for the /recipe page (because it includes functions with time)  
*/
import { useEffect, useState } from "react";
import HeartIcon from "../../components/HeartIcon/HeartIcon";
import MissingAndFound from "../../components/MissingAndFound/MissingAndFound";
import RecipeLink from "../../components/RecipeLink/RecipeLink";
import "./recipe.css";

export default function Recipe() {
  let [recipe, setRecipe] = useState(null);

  useEffect(() => {
    let today = new Date();
    let currentTime = today.toLocaleTimeString("en-SE");

    if (currentTime >= "00:00:00" && currentTime <= "10:00:00") {
      setRecipe("breakfast");
    } else if (currentTime >= "10:00:01" && currentTime <= "14:00:00") {
      setRecipe("lunch");
    } else if (currentTime >= "14:00:01" && currentTime <= "23:59:59") {
      setRecipe("dinner");
    }
  }, []);

  if (recipe === "lunch") {
    return (
      <div className="recipe" id="sweetpotato">
        <div className="top">
          <MissingAndFound
            link="/my-fridgile/recipeproducts"
            missing="3"
            found="0"
            name="Baked Sweet Potato"
          />
          <HeartIcon />
        </div>

        <div className="bottom">
          <RecipeLink title="Sweet Potato" link="bbcgoodfood.com"></RecipeLink>
        </div>
      </div>
    );
  } else if (recipe === "dinner") {
    return (
      <div className="recipe" id="carbonara">
        <div className="top">
          <MissingAndFound
            link="/my-fridgile/recipeproducts"
            missing="7"
            found="0"
            name="Carbonara"
          />
          <HeartIcon />
        </div>

        <div className="bottom">
          <RecipeLink title="Carbonara" link="bbcgoodfood.com"></RecipeLink>
        </div>
      </div>
    );
  } else if (recipe === "breakfast") {
    return (
      <div className="recipe" id="muffin">
        <div className="top">
          <MissingAndFound
            link="/my-fridgile/recipeproducts"
            missing="5"
            found="0"
            name="Breakfast Muffin"
          />
          <HeartIcon />
        </div>

        <div className="bottom">
          <RecipeLink
            title="Breakfast Muffin"
            link="bbcgoodfood.com"
          ></RecipeLink>
        </div>
      </div>
    );
  }
}
