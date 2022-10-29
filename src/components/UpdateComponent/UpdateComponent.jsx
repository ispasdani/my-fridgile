import "./updateComponent.css";

export const UpdateComponent = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  console.log(updateData);
  return (
    <>
      <div className="updateItemContainer">
        <input value={updateData.title} onChange={(e) => changeTask(e)} />
      </div>
      <div className="updateBtns">
        <button onClick={updateTask}>Update</button>
        <button onClick={cancelUpdate}>Cancel</button>
      </div>
    </>
  );
};
