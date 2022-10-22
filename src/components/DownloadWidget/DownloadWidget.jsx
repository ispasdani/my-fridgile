import "./downloadWidget.css";

export const DownloadWidget = () => {
  return (
    <div className="downloadWidget">
      <div className="downloadWidgetTitle">
        <p>Download Fridgile</p>
      </div>
      <div className="downloadWidgetMessage">
        <p>
          Adding products to your digital fridge couldn't be easier with our
          scanning feature available in the mobile version of Fridgile.
        </p>
      </div>
      <div className="downloadWidgetBtn">
        <a>App Store</a>
      </div>
    </div>
  );
};
