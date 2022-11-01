/* 
    written by Josip Brljevic 
    A page with your current items in the fridge that you can select for the recipes
*/

import { useNavigate } from "react-router-dom";
import RecipeProduct from "../../components/recipeproducts/recipeproducts";
import "./Products.css";

export default function Products() {
  const re = /, ?|\n/gm;
  let i = 2;

  //DANIII ->example for the local storage
  localStorage.setItem("name", "Garlic,Shrimp,Orange,Banana");
  const myitemsstorage = localStorage.getItem("name");
  let myitems = myitemsstorage.split(re);

  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="cancelandsave">
        <div className="left">
          <button className="cancel" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
        <div className="right">
          <button className="save" onClick={() => navigate(-1)}>
            Save
          </button>
        </div>
      </div>

      <div className="productdescription">
        <p>Choose the food itmes from your fridge you would like to use:</p>
      </div>

      <div className="expiring">
        <p>Recommended items close to expiring:</p>
      </div>

      <div className="productlist">
        {myitems.map((item, index) => (
          <RecipeProduct name={item} time={i++} key={index} tag={i++} />
        ))}
      </div>

      <div className="selectedfood">
        <p>Selected food items:</p>
      </div>

      <div className="chosen" id="selected">
        <p id="empty">You haven´t selected any items yet.</p>
      </div>
    </div>
  );
}
