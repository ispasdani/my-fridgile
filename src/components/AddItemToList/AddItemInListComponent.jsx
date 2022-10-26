import "./addItemToList.css";

export const AddItemToListComponent = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <div className="addItemToListContainer">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add an item..."
        />
        <button onClick={addTask}>Add</button>
      </div>
    </>
  );
};
