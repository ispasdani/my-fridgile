import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";
import SaveingProvider from "./components/contexts/savingContextx";
import { Myfridge } from "./pages/MyFridge/MyFridge";
import { CardContent } from "./components/cardContent/CardContent";
import { ShoppingList } from "./pages/shoppingList/ShoppingList";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import Loader from "./loadingScreen/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [loading]);

  return (
    <div className="App">
      <BrowserRouter>
        <PageTemplate>
          <SaveingProvider>
            <AnimatePresence>
              <Routes>
                {loading ? (
                  <Route
                    path="/my-fridgile/"
                    element={<Loader setLoading={setLoading} />}
                  />
                ) : (
                  <Route path="/my-fridgile/" element={<Myfridge />} />
                )}

                <Route path="/my-fridgile/add" element={<ObjectDetector />} />
                <Route
                  path="/my-fridgile/shoppingList"
                  element={<ShoppingList />}
                />
                <Route
                  path="/my-fridgile/cardContent"
                  element={<CardContent />}
                />
                <Route path="/my-fridgile/myProfile" element={<MyProfile />} />
              </Routes>
            </AnimatePresence>
          </SaveingProvider>
        </PageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
