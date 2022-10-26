import { useEffect, useState } from "react";
import { useSaveings } from "../contexts/savingContextx";
import "./cardItem.css";
import TrashIcon from "../../assets/icons/trashIcon.svg";

export const CardItem = ({ item, ide }) => {
  const { setDetectedItem } = useSaveings();
  const [activateDelete, setActivateDelete] = useState(false);
  const [expiryDateItem, setExpiryDateItem] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const [statBarColor, setStatBarColor] = useState("");

  const expirationDateBanana = 5;
  const expirationDateCheeseburger = 3;

  const d = new Date();
  const currentDayDate = d.getDate();

  const handleDelete = () => {
    setDetectedItem((prevBudgets) => {
      return prevBudgets.filter((item) => item.id !== ide);
    });
  };

  const calculateExpiryDate = () => {
    let expirationDatePercentage;
    if (item === "banana") {
      setExpiryDateItem(expirationDateBanana);
      expirationDatePercentage = (expirationDateBanana / currentDayDate) * 100;
    }
    if (item === "cheeseburger") {
      setExpiryDateItem(expirationDateBanana);
      expirationDatePercentage =
        (expirationDateCheeseburger / currentDayDate) * 100;
    }
    return setPercentage(expirationDatePercentage);
  };

  useEffect(() => {
    calculateExpiryDate();
    if (percentage <= 30) {
      setStatBarColor("green");
    } else if (percentage > 30 && percentage <= 70) {
      setStatBarColor("tomato");
    } else if (percentage > 70) {
      setStatBarColor("red");
    }
  }, [item]);

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
          <p>{`Expires in ${expiryDateItem} days`}</p>
          <div className="cardItemStatBar">
            <div
              className="cardItemStatBarFill"
              style={{
                width: `${percentage}%`,
                backgroundColor: `${statBarColor}`,
              }}
            ></div>
          </div>
        </div>
      </div>
      {activateDelete && (
        <div
          className="deleteSide"
          onClick={() => {
            handleDelete();
          }}
        >
          <img src={TrashIcon} alt="" />
        </div>
      )}
    </div>
  );
};
