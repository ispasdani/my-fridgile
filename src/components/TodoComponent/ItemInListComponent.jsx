import { useState } from "react";
import "./itemInList.css";
import checkIconBlack from "../../assets/icons/checkBlack.svg";
import checkIconOrange from "../../assets/icons/checkOrange.svg";
import editIconBlack from "../../assets/icons/editBlack.svg";
import editIconOrange from "../../assets/icons/editIconOrange.svg";
import trashIconBlack from "../../assets/icons/trashIconBlack.svg";
import trashIconOrange from "../../assets/icons/trashOrange.svg";
//attention
import checkCircleIconBlack from "../../assets/icons/circleCheckIconBlack.svg"; //soon
//attention
import plusIconBlack from "../../assets/icons/plusIconBlackk.svg";

export const ItemInListComponent = ({
  toDo,
  markDone,
  setUpdateData,
  deleteTask,
}) => {
  const [onHoverCheck, setOnHoverCheck] = useState(false);
  const [onHoverEdit, setOnHoverEdit] = useState(false);
  const [onHoverTrash, setOnHoverTrash] = useState(false);

  return (
    <div className="itemListContainer" key={toDo.id}>
      <div className="itemToBuyContainer">
        <div>
          <img src={plusIconBlack} className="itemInListIconsMain" />
        </div>
        <div className={toDo.status ? "done" : "notDone"}>
          <span className="itemName">{toDo.item}</span>
        </div>
        <div className="iconsContainer">
          <span
            title="Completed / Not Completed"
            onClick={(e) => markDone(toDo.id)}
            onMouseEnter={() => setOnHoverCheck(true)}
            onMouseLeave={() => setOnHoverCheck(false)}
          >
            {onHoverCheck ? (
              <img src={checkIconOrange} alt="" className="itemInListIcons" />
            ) : (
              <img src={checkIconBlack} alt="" className="itemInListIcons" />
            )}
          </span>

          {toDo.status ? null : (
            <span
              title="Edit"
              onClick={() =>
                setUpdateData({
                  id: toDo.id,
                  title: toDo.title,
                  status: toDo.status ? true : false,
                })
              }
              onMouseEnter={() => setOnHoverEdit(true)}
              onMouseLeave={() => setOnHoverEdit(false)}
            >
              {onHoverEdit ? (
                <img src={editIconOrange} alt="" className="itemInListIcons" />
              ) : (
                <img src={editIconBlack} alt="" className="itemInListIcons" />
              )}
            </span>
          )}

          <span
            title="Delete"
            onClick={() => deleteTask(toDo.id)}
            onMouseEnter={() => setOnHoverTrash(true)}
            onMouseLeave={() => setOnHoverTrash(false)}
          >
            {onHoverTrash ? (
              <img src={trashIconOrange} alt="" className="itemInListIcons" />
            ) : (
              <img src={trashIconBlack} alt="" className="itemInListIcons" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
