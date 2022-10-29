/* 
    written by Josip Brljevic 
    A black bar displayed on the top of every recipe showing numbers of missing and found ingredients
*/
import { Link } from "react-router-dom";
import Arrow from "../../assets/recipesimages/arrow.svg";
import "./MissingAndFound.css";
import RecipeData from "../recipedata/recipedata.json";

export default function MissingAndFound(props) {
  const ingredientss = () => {
    RecipeData.map((post) => {
      if (post.name === props.name) {
        return localStorage.setItem("recipedata", post.ingredients);
      } else {
        return null;
      }
    });
  };

  return (
    <div className="missingandfoundcontainer">
      <Link to="/my-fridgile/recipeproducts" onClick={ingredientss}>
        <div className="missingandfound">
          <p>Missing: {props.missing} </p>
          <p>Found: {props.found} </p>
          <div className="arrow">
            <img src={Arrow} alt="arrow"></img>
          </div>
        </div>
      </Link>
    </div>
  );
}
