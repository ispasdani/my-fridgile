import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const SaveingContext = React.createContext();

export function useSaveings() {
  return useContext(SaveingContext);
}

const SaveingProvider = ({ children }) => {
  const [detectedItem, setDetectedItem] = useLocalStorage("items", []);
  const [saveItemFromShoppingList, setSaveItemFromShoppingList] =
    useLocalStorage("sList", []);
  const [saveCategory, setSaveCategory] = useLocalStorage("cate", []);

  function addDetectedItem({ item }) {
    setDetectedItem((prevItems) => {
      return [...prevItems, { id: uuidv4(), item }];
    });
  }

  function addCategory({ item }) {
    setSaveCategory((prevItems) => {
      return [...prevItems, { id: uuidv4(), item }];
    });
  }

  function saveItemToLocal({ item }) {
    setSaveItemFromShoppingList((prevItems) => {
      return [...prevItems, { id: uuidv4(), status: false, item }];
    });
  }

  return (
    <SaveingContext.Provider
      value={{
        detectedItem,
        setDetectedItem,
        addDetectedItem,
        saveItemFromShoppingList,
        setSaveItemFromShoppingList,
        saveItemToLocal,
        addCategory,
        saveCategory,
      }}
    >
      {children}
    </SaveingContext.Provider>
  );
};

export default SaveingProvider;
