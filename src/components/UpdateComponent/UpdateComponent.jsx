import "./updateComponent.css";

export const UpdateComponent = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <>
      <div className="updateItemContainer">
        <input
          value={updateData && updateData.item}
          onChange={(e) => changeTask(e)}
        />
        <div className="updateBtns">
          <button onClick={updateTask}>Update</button>
          <button onClick={cancelUpdate}>Cancel</button>
        </div>
      </div>
      <br />
    </>
  );
};
