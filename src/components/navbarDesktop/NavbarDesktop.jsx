import { useState } from "react";
import "./navbarDesktop.css";
import fridgeIcon from "../../assets/icons/navIconsBlack/fridgeIcon.svg";
import shoppingListIcon from "../../assets/icons/navIconsBlack/shoppingListIcon.svg";
import addIcon from "../../assets/icons/navIconsBlack/addIcon.svg";
import addIconOrange from "../../assets/icons/navIconsOrange/addIconOrange.svg";
import recipesIcon from "../../assets/icons/navIconsBlack/recipesIcon.svg";
import profileIcon from "../../assets/icons/navIconsBlack/profileIcon.svg";
import fridgeIconOrange from "../../assets/icons/navIconsOrange/fridgeIconOrange.svg";
import shoppingListIconOrange from "../../assets/icons/navIconsOrange/shoppingListIconOrange.svg";
import recipesIconOrange from "../../assets/icons/navIconsOrange/recipesIconOrange.svg";
import profileIconOrange from "../../assets/icons/navIconsOrange/profileIconOrange.svg";
import { Link } from "react-router-dom";

export const NavbarDesktop = () => {
  const [fridgeOnHover, setFridgeOnHover] = useState(false);
  const [shoppingListOnHover, setShoppingListOnHover] = useState(false);
  const [recipesOnHover, setRecipesOnHover] = useState(false);
  const [profileOnHover, setProfileOnHover] = useState(false);
  const [addOnHover, setAddOnHover] = useState(false);

  return (
    <div className="NavbarDesktop">
      <div
        className="NavBtnContainerDesktop"
        onMouseEnter={() => {
          setFridgeOnHover(true);
        }}
        onMouseLeave={() => {
          setFridgeOnHover(false);
        }}
      >
        <Link to="/my-fridgile/">
          {fridgeOnHover ? (
            <img src={fridgeIconOrange} className="NavBtnsDesktop" />
          ) : (
            <img src={fridgeIcon} className="NavBtnsDesktop" />
          )}
          <p>My Fridge</p>
        </Link>
      </div>
      <div
        className="NavBtnContainerDesktop"
        onMouseEnter={() => {
          setShoppingListOnHover(true);
        }}
        onMouseLeave={() => {
          setShoppingListOnHover(false);
        }}
      >
        <Link to="/my-fridgile/shoppingList">
          {shoppingListOnHover ? (
            <img src={shoppingListIconOrange} className="NavBtnsDesktop" />
          ) : (
            <img src={shoppingListIcon} className="NavBtnsDesktop" />
          )}
          <p>Shopping List</p>
        </Link>
      </div>
      <div
        className="NavBtnContainerDesktop middle"
        onMouseEnter={() => {
          setAddOnHover(true);
        }}
        onMouseLeave={() => {
          setAddOnHover(false);
        }}
      >
        <Link to="/my-fridgile/add">
          <p>Add Food</p>
          {addOnHover ? (
            <img
              src={addIconOrange}
              alt=""
              className="NavBtnMobileMiddleDesktop"
            />
          ) : (
            <img src={addIcon} alt="" className="NavBtnMobileMiddleDesktop" />
          )}
        </Link>
      </div>
      <div
        className="NavBtnContainerDesktop"
        onMouseEnter={() => {
          setRecipesOnHover(true);
        }}
        onMouseLeave={() => {
          setRecipesOnHover(false);
        }}
      >
        <Link to="/my-fridgile/recipes">
          {recipesOnHover ? (
            <img src={recipesIconOrange} alt="" className="NavBtnsDesktop" />
          ) : (
            <img src={recipesIcon} alt="" className="NavBtnsDesktop" />
          )}
          <p>Recipes</p>
        </Link>
      </div>
      <div
        className="NavBtnContainerDesktop"
        onMouseEnter={() => {
          setProfileOnHover(true);
        }}
        onMouseLeave={() => {
          setProfileOnHover(false);
        }}
      >
        <Link to="/my-fridgile/myProfile">
          {profileOnHover ? (
            <img src={profileIconOrange} alt="" className="NavBtnsDesktop" />
          ) : (
            <img src={profileIcon} alt="" className="NavBtnsDesktop" />
          )}
          <p>My profile</p>
        </Link>
      </div>
    </div>
  );
};
