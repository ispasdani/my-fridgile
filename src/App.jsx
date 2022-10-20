import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";
import SaveingProvider from "./components/contexts/savingContextx";
import { Myfridge } from "./pages/MyFridge/MyFridge";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageTemplate>
          <SaveingProvider>
            <Routes>
              <Route path="/my-fridgile/" element={<Myfridge />} />
              <Route path="/my-fridgile/add" element={<ObjectDetector />} />
            </Routes>
          </SaveingProvider>
        </PageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
