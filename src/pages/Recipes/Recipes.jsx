/* 
  written by Josip Brljevic
  Start of the recipe page
*/
import RecipeCategory from "../../components/recipecategory/recipecategory";
import productIcon from "../../assets/recipesimages/products.svg";
import Breakfast from "../../assets/recipesimages/Breakfast.svg";
import Lunch from "../../assets/recipesimages/Lunch.svg";
import Dinner from "../../assets/recipesimages/Dinner.svg";
import Dessert from "../../assets/recipesimages/Dessert.svg";
import Quick from "../../assets/recipesimages/Quick.svg";
import Meatless from "../../assets/recipesimages/Meatless.svg";
import Saved from "../../assets/recipesimages/saved.svg";
import "./Recipes.css";
import BlackButton from "../../components/blackbutton/blackbutton";
import TimeDescription from "../../components/timedescription/timedescription";
import Recipe from "../../components/recipe/recipe";
import { Link } from "react-router-dom";

export default function Recipes() {
  return (
    <section className="page">
      <div className="titleandicon">
        <p>Recipes</p>
        <div className="image">
          <Link to="/my-fridgile/products">
            <img src={productIcon} alt="producticon" />
          </Link>
        </div>
      </div>

      <div className="description">
        <p>
          Here you can find recipes that match the contents of your fridge the
          most.
        </p>
      </div>

      <div className="flexbox">
        <div className="first">
          <div className="description">
            <TimeDescription />
          </div>
          <Recipe />
        </div>

        <div className="second">
          <div className="description">
            <p>Browse through all recipes</p>
          </div>

          <div className="recipecategories">
            <RecipeCategory
              icon={Breakfast}
              title="Breakfast"
              link="/my-fridgile/breakfast"
            />
            <RecipeCategory
              icon={Lunch}
              title="Lunch"
              link="/my-fridgile/lunch"
            />
            <RecipeCategory
              icon={Dinner}
              title="Dinner"
              link="/my-fridgile/dinner"
            />
            <RecipeCategory icon={Dessert} title="Dessert" />
            <RecipeCategory icon={Quick} title="Quick" />
            <RecipeCategory icon={Meatless} title="Meatless" />
          </div>
          <div className="blackbuttons">
            <BlackButton text="Saved" image={Saved} />
            <BlackButton
              id="second"
              text="All recipes"
              link="/my-fridgile/allrecipes"
            ></BlackButton>
          </div>
        </div>
      </div>
    </section>
  );
}
