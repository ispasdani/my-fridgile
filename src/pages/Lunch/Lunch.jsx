/* written by Josip Brljevic */
import Recipe2 from "../../components/recipe2/recipe2";
import productIcon from "../../assets/recipesimages/products.svg";

export default function Lunch() {
  return (
    <section className="page">
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
