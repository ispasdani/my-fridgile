/* 
  written by Josip Brljevic 
  A component which represents 2 black buttons at the bottom in the Recipe page
*/
import "./blackbutton.css";
import { Link } from "react-router-dom";

export default function BlackButton(props) {
  return (
   
      <Link to={props.link}>
        <button className="blackbutton" type="submit" id={props.id}>
          <p>{props.text}</p>
          <img src={props.image} alt={props.alt}></img>
        </button>
      </Link>

  );
}
