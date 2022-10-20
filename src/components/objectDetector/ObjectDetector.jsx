import { useState, useEffect, useRef } from "react";
import "./objectDetector.css";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";

export const ObjectDetector = () => {
  const [isModelling, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState("");

  const imageRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const identify = async () => {
    const result = await model.classify(imageRef.current);
    setResults(result);
  };

  useEffect(() => {
    loadModel();
  }, []);

  if (isModelling) {
    return <h2>Model loading...</h2>;
  }

  return (
    <div>
      <h2>Image Identifications</h2>
      <div>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={uploadImage}
        />
        <button>Add Item</button>
      </div>

      <div>
        {results && (
          <div>
            {" "}
            {results.map((result) => {
              console.log(result.className);
            })}
          </div>
        )}
        {imageURL && (
          <img
            className="image"
            src={imageURL}
            alt="Uploaded Image"
            crossOrigin="anonymous"
            ref={imageRef}
          />
        )}
        {imageURL && (
          <button
            onClick={() => {
              identify();
            }}
          >
            Identify Image
          </button>
        )}
      </div>
    </div>
  );
};
