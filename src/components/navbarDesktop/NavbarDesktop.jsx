import { useState } from "react";
import "./navbarDesktop.css";
import fridgeIcon from "../../assets/icons/navIconsBlack/fridgeIcon.svg";
import shoppingListIcon from "../../assets/icons/navIconsBlack/shoppingListIcon.svg";
import addIcon from "../../assets/icons/navIconsBlack/addIcon.svg";
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
        {fridgeOnHover ? (
          <img src={fridgeIconOrange} className="NavBtnsDesktop" />
        ) : (
          <img src={fridgeIcon} className="NavBtnsDesktop" />
        )}
        <p>My Fridge</p>
      </div>
      <div
        className="NavBtnContainerDesktop NavBtnContainerShoppingListDesktop"
        onMouseEnter={() => {
          setShoppingListOnHover(true);
        }}
        onMouseLeave={() => {
          setShoppingListOnHover(false);
        }}
      >
        {shoppingListOnHover ? (
          <img src={shoppingListIconOrange} className="NavBtnsDesktop" />
        ) : (
          <img src={shoppingListIcon} className="NavBtnsDesktop" />
        )}
        <p>Shopping List</p>
      </div>
      <div className="NavBtnContainerDesktop NavBtnContainerMiddleDesktop">
        <p>Add Food</p>
        <Link to="/my-fridgile/add">
          <img src={addIcon} alt="" className="NavBtns NavBtnMiddleDesktop" />
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
        {recipesOnHover ? (
          <img src={recipesIconOrange} alt="" className="NavBtnsDesktop" />
        ) : (
          <img src={recipesIcon} alt="" className="NavBtnsDesktop" />
        )}
        <p>Recipes</p>
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
        {profileOnHover ? (
          <img src={profileIconOrange} alt="" className="NavBtnsDesktop" />
        ) : (
          <img src={profileIcon} alt="" className="NavBtnsDesktop" />
        )}
        <p>My profile</p>
      </div>
    </div>
  );
};
