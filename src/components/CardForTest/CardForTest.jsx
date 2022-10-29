import "./cardForTest.css";
import TrashIcon from "../../assets/icons/trashIcon.svg";
import { useState } from "react";

export const CardForTest = ({ item }) => {
  const [activateDelete, setActivateDelete] = useState(false);

  return (
    <div className="cardItem">
      <div className="cardItemContentContainer">
        <div className="cardItemContentTop">
          <p>{item}</p>
          <div
            className="dotsContainer"
            onClick={() => setActivateDelete(!activateDelete)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="cardItemContentBottom">
          <p>{`Expires in 1 days`}</p>
          <div className="cardItemStatBar">
            <div
              className="cardItemStatBarFill"
              style={{
                width: `90%`,
                backgroundColor: `red`,
              }}
            ></div>
          </div>
        </div>
      </div>
      {activateDelete && (
        <div className="deleteSide">
          <img src={TrashIcon} alt="" />
        </div>
      )}
    </div>
  );
};
