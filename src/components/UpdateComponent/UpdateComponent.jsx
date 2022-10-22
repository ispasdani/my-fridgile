import "./updateComponent.css";

export const UpdateComponent = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <>
      {/* Update Task */}
      <div>
        <div>
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
          />
        </div>
        <div>
          <button onClick={updateTask}>Update</button>
          <button onClick={cancelUpdate}>Cancel</button>
        </div>
      </div>
      <br />
    </>
  );
};
