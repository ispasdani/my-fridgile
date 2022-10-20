import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./templates/PageTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageTemplate>
          <Routes>
            <Route path="/my-fridgile/add" element={<ObjectDetector />} />
          </Routes>
        </PageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
