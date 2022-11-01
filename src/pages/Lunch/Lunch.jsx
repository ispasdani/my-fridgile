/* written by Josip Brljevic */
import { useNavigate } from "react-router-dom";
import Recipe2 from "../../components/recipe2/recipe2";
import productIcon from "../../assets/recipesimages/products.svg";

export default function Lunch() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <button className="cancel" onClick={() => navigate(-1)}>
        <p> &#60;</p>
        <p>Go back</p>
      </button>
      <div className="titleandicon">
        <p>Lunch</p>
        <div className="image">
          <img src={productIcon} alt="producticon" />
        </div>
      </div>

      <Recipe2 time="lunch" />
    </section>
  );
}
