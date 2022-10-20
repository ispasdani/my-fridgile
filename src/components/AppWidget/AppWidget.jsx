import React from "react";
import "./AppWidget.css";

export default function AppWidget() {
  return (
    <div className="app-widget">
      <div className="headline">
        <p>Download Fridgile</p>
      </div>
      <div className="b-text">
        <p>
          Adding products to your digital fridge couldn't be easier with our
          scanning feature available in the mobile version of Fridgile.<br></br>
        </p>
      </div>
      <div className="download-btn">
        <button>Download</button>
      </div>
    </div>
  );
}
