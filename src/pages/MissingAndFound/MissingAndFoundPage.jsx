/*
    writen by Josip Brljevic
    A component that displays the items from your fridge when you press the top right button on the Recipe page
*/

import { useNavigate } from "react-router-dom";
import "./MissingAndFoundPage.css";
import ShareModal from "../../components/SharePopup/ShareModal";
import LocalStorageDisplay from "../../components/Allingredients/Allingredients";
import { useState } from "react";
import Found from "../../components/Found/Found";
import Missing from "../../components/Missing/Missing";

export default function MissingAndFoundPage() {
  const [all, setAll] = useState(true);
  const [foundList, setFoundList] = useState(false);
  const [missingList, setMissingList] = useState(false);

  const [allActive, setAllActive] = useState(true);
  const [foundActive, setFoundActive] = useState(false);
  const [missingActive, setMissingActive] = useState(false);

  const navigate = useNavigate();

  // DANIII -> this is my example of the local storage from the fridge so that I can test the filters
  // here you can add the function/hook to get the local storage
  localStorage.setItem("name", "Garlic,Shrimp,Guz");

  //filter functions

  //1. found filter
  const found = (event) => {
    event.preventDefault();
    setFoundList(true);
    setAll(false);
    setMissingList(false);

    setFoundActive(true);
    setAllActive(false);
    setMissingActive(false);
  };

  //2. missing filter
  const missing = (event) => {
    event.preventDefault();
    setMissingList(true);
    setFoundList(false);
    setAll(false);

    setFoundActive(false);
    setAllActive(false);
    setMissingActive(true);
  };

  const allbutton = (event) => {
    event.preventDefault();
    setMissingList(false);
    setFoundList(false);
    setAll(true);

    setFoundActive(false);
    setAllActive(true);
    setMissingActive(false);
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
        <button
          type="button"
          className={allActive ? "active" : "noactive"}
          onClick={allbutton}
        >
          All
        </button>
        <button
          type="button"
          className={foundActive ? "active" : "noactive"}
          onClick={found}
        >
          Found
        </button>
        <button
          type="button"
          className={missingActive ? "active" : "noactive"}
          onClick={missing}
        >
          Missing
        </button>
      </div>

      <div className="textandaddall">
        <p className="clickplustext">
          Click on the + icon to add to shopping list
        </p>
        <button type="button" className="addall">
          Add all
        </button>
      </div>

      {/* If one of these lists is true (they become true on click of the button) it is displayed, if not then it shows nothing */}

      {foundList ? <Found /> : " "}

      {missingList ? <Missing /> : " "}
      {all ? <LocalStorageDisplay /> : " "}
    </div>
  );
}
