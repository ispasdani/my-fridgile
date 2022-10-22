import "./recipesWidget.css";
import recipesGraphic from "../../assets/images/man.svg";

export const RecipesWidget = () => {
  return (
    <div className="recipesWidget">
      <div className="recipesWidgetLeft">
        <div className="recipesWidgetTitle">
          <p>Recipes</p>
        </div>
        <div className="recipesWidgetMessage">
          <p>Struggling with deciding what to cook?</p>
          <p>
            See recommended recipes based on food items you have in your fridge.
          </p>
        </div>
        <div className="recipesBtn">
          <a>Go to recipes</a>
        </div>
      </div>
      <div className="recipesWidgetRight">
        <img src={recipesGraphic} alt="" className="recipesWidgetIcon" />
      </div>
    </div>
  );
};
