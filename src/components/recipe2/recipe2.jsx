/* 
  written by Josip Brljevic 
  A recipe component ONLY used in the different category pages of the recipe
*/
import HeartIcon from "../HeartIcon/HeartIcon";
import MissingAndFound from "../MissingAndFound/MissingAndFound";
import RecipeLink from "../RecipeLink/RecipeLink";
import "../recipe/recipe.css";
import RecipeData from "../recipedata/recipedata.json";

export default function Recipe2(props) {
  //RecipeData is the JSON file that contains the recipe information, the recipes are divided by 3 categories: breakfast, lunch and dinner

  return (
    <div>
      {RecipeData.map((post) => {
        if (props.time === post.time) {
          return (
            <div className="recipe2" key={post.id}>
              <div className="recipe" id={post.tag}>
                <div className="top">
                  <MissingAndFound
                    missing={post.amount}
                    found="0"
                    name={post.name}
                  />
                  <HeartIcon />
                </div>

                <div className="bottom">
                  <RecipeLink
                    link="bbcgoodfood.com"
                    title={post.name}
                  ></RecipeLink>
                </div>
              </div>
            </div>
          );
        } else {
          return <div key={post.id}></div>;
        }
      })}
    </div>
  );
}
