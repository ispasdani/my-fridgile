import React from "react";

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
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div>
                  <div className={task.status ? "done" : ""}>
                    <span>{index + 1}</span>
                    <span>{task.title}</span>
                  </div>
                  <div>
                    <span
                      title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      check
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
                        edit
                      </span>
                    )}

                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      delete
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};
