/* written by Oliwia Olender */
import React, { useState } from "react";
import { Card } from "../../components/Card/Card.jsx";
import Carrot from "../../assets/images/carrot.svg";
import Banana from "../../assets/images/banana.svg";
import Dairy from "../../assets/images/dairy.svg";
import Meat from "../../assets/images/meat.svg";
import Fish from "../../assets/images/fish.svg";
import Plus from "../../assets/images/plus.svg";
import "./myFridge.css";
import { RecipesWidget } from "../../components/RecipesWidget/RecipesWidget.jsx";
import { DownloadWidget } from "../../components/DownloadWidget/DownloadWidget.jsx";
import { AddCategoryPopup } from "../../components/AddCategoryPopup/AddCategoryPopup.jsx";
import { AddCategoryPopupContext } from "../../contexts/addCategoryPopupContext";
import { useSaveings } from "../../contexts/savingContextx.jsx";
import myFridgeIcon from "../../assets/images/myFridgeIcon.svg";

export function Myfridge() {
  const [newCard, setNewCard] = useState("");
  const [popupAddCategory, setPopupAddCategory] = useState(false);
  const { saveCategory } = useSaveings();

  return (
    <>
      <AddCategoryPopupContext.Provider
        value={{ setNewCard, setPopupAddCategory }}
      >
        {popupAddCategory && <AddCategoryPopup />}
        <div className="myFridge">
          <img src={myFridgeIcon} alt="" className="myFridgeIcon" />
          <div className="fridgeLeftSide">
            <div className="fridgeTitle">
              <p>My Fridge</p>
            </div>
            <div className="fridgeSubTitle">
              <p>Click on the category to see and add items</p>
            </div>
            <div className="fridgeCategories">
              <Card icon={Carrot} title={"Vegetables"} />
              <Card icon={Banana} title={"Fruits"} />
              <Card icon={Dairy} title={"Dairy"} />
              <Card icon={Meat} title={"Meat"} />
              <Card icon={Fish} title={"Fish"} />
              <div
                className="addCardCategory"
                onClick={() => {
                  setPopupAddCategory(true);
                }}
              >
                <div className="add-category-icon">
                  <img src={Plus} alt="category icon"></img>
                </div>
              </div>
              {saveCategory.length > 0 ? (
                <div>
                  {saveCategory.map((x) => {
                    return <Card title={x.item} key={x.id} />;
                  })}
                </div>
              ) : (
                false
              )}
              {/* getting the data from localStorage
              {newCard && <Card title={newCard} />} */}
            </div>
          </div>
          <div className="fridgeRightSide">
            <DownloadWidget />
            <RecipesWidget />
          </div>
        </div>
      </AddCategoryPopupContext.Provider>
    </>
  );
}
