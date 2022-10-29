/*
    writen by Josip Brljevic
    A component that displays the items from your fridge when you press the top right button on the Recipe page
*/

import { useNavigate } from "react-router-dom";
import "./MissingAndFoundPage.css";
import ShareModal from "../../components/SharePopup/ShareModal";
import LocalStorageDisplay from "../../components/LocalStorageDisplay/LocalStorageDisplay";
import { useState } from "react";

export default function MissingAndFoundPage() {
  const [list, setList] = useState(false);

  const navigate = useNavigate();
  const re = /, ?|\n/gm;
  localStorage.setItem("name", "Egg,Tomato");

  const recipestorage = localStorage.getItem("recipedata");
  let recipeitems = recipestorage.split(re);

  const myitemsstorage = localStorage.getItem("name");
  let myitems = myitemsstorage.split(re);

  //filter functions
  //1. found
  let newList;
  const found = () => {
    for (let i = 0; i <= recipeitems.length; i++) {
      for (let j = 0; j <= myitems.length; j++) {
        if (recipeitems[i] === myitems[j]) {
          setList(!list);
          newList = recipeitems[i];
        }
      }
    }
    setList(!list);
    return newList;
  };

  return (
    <div className="page">
      <button className="cancel" onClick={() => navigate(-1)}>
        <p> &#60;</p>
        <p>Go back</p>
      </button>

      <div className="titleandshareicon">
        <p className="ingredientstitle">Ingredients</p>
        <div className="shareicon">
          <ShareModal />
        </div>
      </div>

      <div className="filterbuttons">
        <button type="button" className="active">
          All
        </button>
        <button type="button" className="noactive" onClick={found}>
          Found
        </button>
        <button type="button" className="noactive">
          Missing
        </button>
      </div>

      {list ? (
        <div>
          <p>{newList}</p>
        </div>
      ) : (
        " "
      )}
      <LocalStorageDisplay />
    </div>
  );
}
