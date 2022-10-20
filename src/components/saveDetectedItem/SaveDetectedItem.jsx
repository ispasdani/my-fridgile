import "./saveDetectedItem.css";
import { useSaveings } from "../contexts/savingContextx";

export const SaveDetectedItem = ({ itemName }) => {
  const { addDetectedItem } = useSaveings();

  return (
    <div className="saveDetectedItem">
      <p>Is this correct?</p>
      <p>{itemName}</p>
      <div>
        <p
          onClick={(e) => {
            e.preventDefault();
            addDetectedItem(itemName);
          }}
        >
          YES
        </p>
        <p>NO</p>
      </div>
    </div>
  );
};
