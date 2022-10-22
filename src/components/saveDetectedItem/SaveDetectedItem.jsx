import "./saveDetectedItem.css";
import { useSaveings } from "../contexts/savingContextx";
import { useRef } from "react";

export const SaveDetectedItem = ({ itemName, handleClose }) => {
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
  };

  return (
    <div className="saveDetectedItem">
      <form onSubmit={handleSubmit}>
        <p>Is this correct?</p>
        <input
          value={itemName}
          ref={nameRef}
          type="text"
          name="name"
          required
        />
        <div>
          <button type="submit">Yes</button>
          <button
            onClick={() => {
              refreshPage();
            }}
          >
            NO
          </button>
        </div>
      </form>
    </div>
  );
};
