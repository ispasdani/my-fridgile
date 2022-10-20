import { ObjectDetector } from "./components/objectDetector/ObjectDetector";
import PageTemplate from "./templates/PageTemplate";

function App() {
  return (
    <div className="App">
      <PageTemplate>
        <ObjectDetector />
      </PageTemplate>
    </div>
  );
}

export default App;
