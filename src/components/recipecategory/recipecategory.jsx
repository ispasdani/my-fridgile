/* 
  written by Josip Brljevic 
  A component that shows different recipe categories -> green boxes with icons at the bottom of the page
*/
import { Link } from "react-router-dom";
import "./recipecategory.css";

export default function RecipeCategory(props) {
  return (
    <Link to={props.link}>
      <div className="recipecategory">
        <div className="categoryicon">
          <img src={props.icon} alt="icon" />
        </div>
        <div className="categorytitle">
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  );
}
