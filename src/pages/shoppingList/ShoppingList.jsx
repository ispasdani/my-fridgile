import "./shoppingList.css";
import { useState } from "react";
import { AddItemToListComponent } from "../../components/AddItemToList/AddItemInListComponent";
import { ItemInListComponent } from "../../components/TodoComponent/ItemInListComponent";
import { UpdateComponent } from "../../components/UpdateComponent/UpdateComponent";
import shoppingListBackground from "../../assets/images/shoppingBackground.svg";

export const ShoppingList = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="shoppingList">
      <div className="shoppingListTitle">
        <h2>Shopping List</h2>
      </div>
      <div className="shoppingListContent">
        {updateData && updateData ? (
          <UpdateComponent
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddItemToListComponent
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {toDo.length > 0 && (
          <div className="shoppingListInstructions">
            <p>Click on + to add items to fridge</p>
            <p>Add all</p>
          </div>
        )}

        <div className="shoppinglistItemsContainer">
          {toDo.length > 0 ? (
            <ItemInListComponent
              toDo={toDo}
              markDone={markDone}
              setUpdateData={setUpdateData}
              deleteTask={deleteTask}
            />
          ) : (
            <img
              src={shoppingListBackground}
              alt=""
              className="shoppingListImgBackground"
            />
          )}
        </div>
      </div>
    </div>
  );
};
