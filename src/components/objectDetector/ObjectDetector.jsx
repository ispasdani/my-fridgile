import { useState, useEffect, useRef } from "react";
import "./objectDetector.css";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";
import cameraIcon from "../../assets/icons/camera.svg";
import imageLabel from "../../assets/icons/cameraLabel.svg";
import { SaveDetectedItem } from "../saveDetectedItem/SaveDetectedItem";

export const ObjectDetector = () => {
  const [isModelling, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);

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
    <div className="objectDetector">
      <h2 className="title">Add Food</h2>
      <p className="detectorPrimaryMessage">Take a photo of your item.</p>
      <p className="detectorSecondaryMessage">
        ! Make sure that the item is centered and keep the device steady to
        receive accurate results.
      </p>

      {/* {results.length > 0 && <div>{results[0].className}</div>} */}
      {results.length > 0 && (
        <SaveDetectedItem itemName={results[0].className} />
      )}
      <div className="imageContainer">
        {imageURL ? (
          <img
            className="image"
            src={imageURL}
            alt="Uploaded Image"
            crossOrigin="anonymous"
            ref={imageRef}
          />
        ) : (
          <img src={imageLabel} className="imageLabel" />
        )}
      </div>

      {imageURL ? (
        <button
          className="identifyItem"
          onClick={() => {
            identify();
          }}
        >
          Identify Image
        </button>
      ) : (
        <label className="takeAPhoto">
          <input
            type="file"
            accept="image/*"
            capture="camera"
            onChange={uploadImage}
          />
          <img src={cameraIcon} alt="" className="cameraIcon" />
        </label>
      )}
    </div>
  );
};
