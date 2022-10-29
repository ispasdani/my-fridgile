import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";
import SaveingProvider from "./contexts/savingContextx";
import { Myfridge } from "./pages/MyFridge/MyFridge";
import { CardContent } from "./components/cardContent/CardContent";
import { ShoppingList } from "./pages/shoppingList/ShoppingList";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import Loader from "./loadingScreen/Loader";
import Recipes from "./pages/Recipes/Recipes";
import Breakfast from "./pages/Breakfast/Breakfast";
import Dinner from "./pages/Dinner/Dinner";
import AllRecipes from "./pages/AllRecipes/AllRecipes";
import Products from "./pages/Products/Products";
import MissingAndFoundPage from "./pages/MissingAndFound/MissingAndFoundPage";
import Lunch from "./pages/Lunch/Lunch";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [loading]);

  return (
    <div className="App">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <BrowserRouter>
          <PageTemplate>
            <SaveingProvider>
              <AnimatePresence>
                <Routes>
                  <Route path="/my-fridgile/" element={<Myfridge />} />
                  <Route path="/my-fridgile/add" element={<ObjectDetector />} />
                  <Route
                    path="/my-fridgile/shoppingList"
                    element={<ShoppingList />}
                  />
                  <Route
                    path="/my-fridgile/cardContent"
                    element={<CardContent />}
                  />
                  <Route
                    path="/my-fridgile/myProfile"
                    element={<MyProfile />}
                  />
                  <Route path="/my-fridgile/recipes" element={<Recipes />} />
                  <Route
                    path="/my-fridgile/breakfast"
                    element={<Breakfast />}
                  />
                  <Route path="/my-fridgile/lunch" element={<Lunch />} />
                  <Route path="/my-fridgile/dinner" element={<Dinner />} />
                  <Route
                    path="/my-fridgile/allrecipes"
                    element={<AllRecipes />}
                  />
                  <Route path="/my-fridgile/products" element={<Products />} />
                  <Route
                    path="/my-fridgile/recipeproducts"
                    element={<MissingAndFoundPage />}
                  />
                </Routes>
              </AnimatePresence>
            </SaveingProvider>
          </PageTemplate>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
