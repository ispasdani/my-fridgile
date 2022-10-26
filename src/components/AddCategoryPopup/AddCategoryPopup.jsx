import React, { useContext, useState } from "react";
import { AddCategoryPopupContext } from "../contexts/addCategoryPopupContext";
import "./addCategoryPopup.css";

export const AddCategoryPopup = () => {
  const [takeInput, setTakeInput] = useState("");
  const { setPopupAddCategory, setNewCard } = useContext(
    AddCategoryPopupContext
  );

  const handleChange = () => {
    return setNewCard(takeInput), setPopupAddCategory(false);
  };

  return (
    <div className="popupBackground">
      <div className="popup">
        <div className="popupTopSide">
          <p>Name your category...</p>
          <button onClick={() => setPopupAddCategory(false)}>&#10006;</button>
        </div>
        <div className="popupBottomSide">
          <input
            maxLength="15"
            type="text"
            placeholder="Name your category..."
            onChange={(event) => {
              setTakeInput(event.target.value);
            }}
          />
          <button type="submit" onClick={handleChange}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /*; */
}
