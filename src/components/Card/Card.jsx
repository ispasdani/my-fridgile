/* written by Oliwia Olender */
import "./card.css";
import { useNavigate } from "react-router-dom";

export function Card({ icon, title }) {
  const navigate = useNavigate();

  const navigateToCardContent = () => {
    navigate(`/my-fridgile/cardContent?name=${title}`);
  };

  return (
    <div className="card-category" onClick={navigateToCardContent}>
      <div className="category-icon">
        {icon && <img src={icon} alt="category icon" />}
      </div>
      <div className="category-title">
        <p>{title}</p>
      </div>
    </div>
  );
}
