import { useState } from "react";
import "./navbarMobile.css";
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

export const NavbarMobile = () => {
  const [fridgeOnHover, setFridgeOnHover] = useState(false);
  const [shoppingListOnHover, setShoppingListOnHover] = useState(false);
  const [recipesOnHover, setRecipesOnHover] = useState(false);
  const [profileOnHover, setProfileOnHover] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const openMobileNavOnClick = () => {
    setOpenMobileNav(true);

    setTimeout(() => {
      setOpenMobileNav(false);
    }, 5000);
  };

  return (
    <>
      {openMobileNav ? (
        <div className="NavbarMobile">
          <div
            className="NavBtnContainerMobile"
            onMouseEnter={() => {
              setFridgeOnHover(true);
            }}
            onMouseLeave={() => {
              setFridgeOnHover(false);
            }}
          >
            {fridgeOnHover ? (
              <img src={fridgeIconOrange} className="NavBtnsMobile" />
            ) : (
              <img src={fridgeIcon} className="NavBtnsMobile" />
            )}
            <p>My Fridge</p>
          </div>
          <div
            className="NavBtnContainerMobile NavBtnContainerMobileShoppingList"
            onMouseEnter={() => {
              setShoppingListOnHover(true);
            }}
            onMouseLeave={() => {
              setShoppingListOnHover(false);
            }}
          >
            {shoppingListOnHover ? (
              <img src={shoppingListIconOrange} className="NavBtnsMobile" />
            ) : (
              <img src={shoppingListIcon} className="NavBtnsMobile" />
            )}
            <p>Shopping List</p>
          </div>
          <div className="NavBtnContainerMobile ">
            <Link to="/my-fridgile/add">
              <img
                src={addIcon}
                alt=""
                className="NavBtnsMobile NavBtnMobileMiddle"
              />
              <p>Add Food</p>
            </Link>
          </div>
          <div
            className="NavBtnContainerMobile"
            onMouseEnter={() => {
              setRecipesOnHover(true);
            }}
            onMouseLeave={() => {
              setRecipesOnHover(false);
            }}
          >
            {recipesOnHover ? (
              <img src={recipesIconOrange} alt="" className="NavBtnsMobile" />
            ) : (
              <img src={recipesIcon} alt="" className="NavBtnsMobile" />
            )}
            <p>Recipes</p>
          </div>
          <div
            className="NavBtnContainerMobile"
            onMouseEnter={() => {
              setProfileOnHover(true);
            }}
            onMouseLeave={() => {
              setProfileOnHover(false);
            }}
          >
            {profileOnHover ? (
              <img src={profileIconOrange} alt="" className="NavBtnsMobile" />
            ) : (
              <img src={profileIcon} alt="" className="NavBtnsMobile" />
            )}
            <p>My profile</p>
          </div>
        </div>
      ) : (
        <div
          className="ClosedMobileNavbar"
          onClick={() => {
            openMobileNavOnClick();
          }}
        >
          <span></span>
        </div>
      )}
    </>
  );
};
