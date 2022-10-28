import "./saveDetectedItem.css";
import { useSaveings } from "../contexts/savingContextx";
import { useRef } from "react";

export const SaveDetectedItem = ({ itemName }) => {
  const { addDetectedItem } = useSaveings();
  const nameRef = useRef();

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDetectedItem({
      item: nameRef.current.value,
    });
    refreshPage();
  };

  return (
    <div className="saveDetectedItem">
      <div className="saveDetectedItemPopup">
        <form onSubmit={handleSubmit}>
          <p>Is this correct?</p>
          <input
            value={itemName}
            ref={nameRef}
            type="text"
            name="name"
            required
          />
          <div className="saveDetectedItemBtns">
            <button type="submit">Yes</button>
            <button>NO</button>
          </div>
        </form>
      </div>
    </div>
  );
};
