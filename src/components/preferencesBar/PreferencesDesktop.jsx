/* written by Ispas Daniel Nicolae */
import { useState } from "react";
import preferencesBlack from "../../assets/icons/preferences/preferences.svg";
import preferencesOrange from "../../assets/icons/preferences/preferencesOrange.svg";
import "./preferences.css";
import prefIconBtn from "../../assets/icons/arrowBar.svg";
import logo from "../../assets/loggo.png";

export const PreferencesBarDesktop = () => {
  const [prefOnHover, setPrefOnHover] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const [firstAllow, setFirstAllow] = useState(false);
  const [secondAllow, setSecondAllow] = useState(false);
  const [thirdAllow, setThirdAllow] = useState(false);

  return (
    <div className="preferencesBar">
      {/* <h2 className="titleHeartbeat">Fridgile</h2> */}
      <img src={logo} className="logo" />
      <div
        className="catt"
        onMouseEnter={() => {
          setPrefOnHover(true);
        }}
        onMouseLeave={() => {
          setPrefOnHover(false);
        }}
      >
        {openBar && (
          <div className="popupBar">
            <div className="popupBarContent">
              <p>Preferences</p>
              <img src={prefIconBtn} alt="" className="prefIcon" />
            </div>
            <div className="popupBarContent">
              <p>Push Notifications</p>
              <div
                className="checkIcon"
                style={{
                  justifyContent: `${firstAllow ? "flex-end" : "flex-start"}`,
                  backgroundColor: `${
                    firstAllow ? "rgb(85, 216, 106)" : "rgb(187, 187, 187)"
                  }`,
                }}
              >
                <div
                  className="ball"
                  onClick={() => setFirstAllow(!firstAllow)}
                ></div>
              </div>
            </div>
            <div className="popupBarContent">
              <p>Allow Access to Contacts</p>
              <div
                className="checkIcon"
                style={{
                  justifyContent: `${secondAllow ? "flex-end" : "flex-start"}`,
                  backgroundColor: `${
                    secondAllow ? "rgb(85, 216, 106)" : "rgb(187, 187, 187)"
                  }`,
                }}
              >
                <div
                  className="ball"
                  onClick={() => setSecondAllow(!secondAllow)}
                ></div>
              </div>
            </div>
            <div className="popupBarContent">
              <p> Allow My Location</p>
              <div
                className="checkIcon"
                style={{
                  justifyContent: `${thirdAllow ? "flex-end" : "flex-start"}`,
                  backgroundColor: `${
                    thirdAllow ? "rgb(85, 216, 106)" : "rgb(187, 187, 187)"
                  }`,
                }}
              >
                <div
                  className="ball"
                  onClick={() => setThirdAllow(!thirdAllow)}
                ></div>
              </div>
            </div>
          </div>
        )}
        {prefOnHover ? (
          <img
            src={preferencesOrange}
            alt=""
            className="preferencesIcon"
            onClick={() => setOpenBar(!openBar)}
          />
        ) : (
          <img
            src={preferencesBlack}
            alt=""
            className="preferencesIcon"
            onClick={() => setOpenBar(!openBar)}
          />
        )}
      </div>
    </div>
  );
};
