import React, { useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const SaveingContext = React.createContext();

export function useSaveings() {
  return useContext(SaveingContext);
}

const SaveingProvider = ({ children }) => {
  const [detectedItem, setDetectedItem] = useLocalStorage("items", []);

  function addDetectedItem({ item }) {
    setDetectedItem((prevItems) => {
      return [...prevItems, { id: Math.floor(Math.random() * 10), item }];
    });
  }

  return (
    <SaveingContext.Provider value={{ detectedItem, addDetectedItem }}>
      {children}
    </SaveingContext.Provider>
  );
};

export default SaveingProvider;
