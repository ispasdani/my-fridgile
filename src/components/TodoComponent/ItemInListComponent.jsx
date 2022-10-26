import React, { useState } from "react";
import "./itemInList.css";
import checkIconBlack from "../../assets/icons/checkBlack.svg";
import editIconBlack from "../../assets/icons/editBlack.svg";
import trashIconBlack from "../../assets/icons/trashIconBlack.svg";
import checkCircleIconBlack from "../../assets/icons/circleCheckIconBlack.svg";
import plusIconBlack from "../../assets/icons/plusIconBlackk.svg";

export const ItemInListComponent = ({
  toDo,
  markDone,
  setUpdateData,
  deleteTask,
}) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task) => {
            return (
              <React.Fragment key={task.id}>
                <div className="itemToBuyContainer">
                  <div>
                    <img src={plusIconBlack} className="itemInListIconsMain" />
                  </div>
                  <div className={task.status ? "done" : "notDone"}>
                    <span className="itemName">{task.title}</span>
                  </div>
                  <div className="iconsContainer">
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <img
                        src={checkIconBlack}
                        alt=""
                        className="itemInListIcons"
                      />
                    </span>

                    {task.status ? null : (
                      <span
                        title="Edit"
                        onClick={() =>
                          setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false,
                          })
                        }
                      >
                        <img
                          src={editIconBlack}
                          alt=""
                          className="itemInListIcons"
                        />
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <img
                        src={trashIconBlack}
                        alt=""
                        className="itemInListIcons"
                      />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};
