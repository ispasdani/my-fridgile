import "./shoppingList.css";
import { useState, useRef } from "react";
import { AddItemToListComponent } from "../../components/AddItemToList/AddItemInListComponent";
import { ItemInListComponent } from "../../components/TodoComponent/ItemInListComponent";
import { UpdateComponent } from "../../components/UpdateComponent/UpdateComponent";
import shoppingListBackground from "../../assets/images/shoppingBackground.svg";
import { useSaveings } from "../../contexts/savingContextx";

export const ShoppingList = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const {
    saveItemToLocal,
    saveItemFromShoppingList,
    setSaveItemFromShoppingList,
  } = useSaveings();
  const itemRef = useRef();

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      saveItemToLocal({ item: itemRef.current.value });
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = saveItemFromShoppingList.filter((task) => task.id !== id);
    setSaveItemFromShoppingList(newTasks);
  };

  const markDone = (id) => {
    let newTask = saveItemFromShoppingList.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setSaveItemFromShoppingList(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      item: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };
  console.log(updateData);
  const updateTask = () => {
    let filterRecords = [...saveItemFromShoppingList].filter(
      (task) => task.id !== updateData.id
    );
    let updatedObject = [...filterRecords, updateData];
    setSaveItemFromShoppingList(updatedObject);
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
            itemRef={itemRef}
          />
        )}

        {saveItemFromShoppingList.length > 0 && (
          <div className="shoppingListInstructions">
            <p>Click on + to add items to fridge</p>
            <p>Add all</p>
          </div>
        )}

        <div className="shoppinglistItemsContainer">
          {saveItemFromShoppingList.length > 0 ? (
            <div className="wrapperList">
              {saveItemFromShoppingList.map((x) => {
                return (
                  <ItemInListComponent
                    toDo={x}
                    markDone={markDone}
                    setUpdateData={setUpdateData}
                    deleteTask={deleteTask}
                    key={x.id}
                  />
                );
              })}
            </div>
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
