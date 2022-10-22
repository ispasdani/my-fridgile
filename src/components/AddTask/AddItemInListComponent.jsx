import "./addTask.css";

export const AddItemToListComponent = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      <div className="addTaskContainer">
        <div className="inputTaskContainer">
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </div>
        <div className="btnTaskContainer">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <br />
    </>
  );
};
