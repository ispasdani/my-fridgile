import { useState, useEffect, useRef } from "react";
import Styles from "./objectDetector.css";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";

export const ObjectDetector = () => {
  const [isModelling, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState("");

  const imageRef = useRef();
  const fileInputRef = useRef();

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
    <div className={Styles.ObjectDetectorContainer}>
      <h2>Image Identifications</h2>
      <div className={Styles.InputHolder}>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className={Styles.UploadInput}
          onChange={uploadImage}
        />
        <button className={Styles.AddItemButton}>Add Item</button>
      </div>
      <div>
        {imageURL && (
          <img
            src={imageURL}
            alt="Uploaded Image"
            crossOrigin="anonymous"
            ref={imageRef}
          />
        )}

        {imageURL && (
          <button
            className={Styles.IdentifyingStartButton}
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
