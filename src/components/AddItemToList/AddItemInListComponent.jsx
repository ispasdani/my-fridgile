import "./addItemToList.css";

export const AddItemToListComponent = ({
  newTask,
  setNewTask,
  addTask,
  itemRef,
}) => {
  return (
    <div className="addItemToListContainer">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add an item..."
        ref={itemRef}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};
