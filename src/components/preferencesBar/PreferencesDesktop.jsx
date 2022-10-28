import { useState } from "react";
import preferencesBlack from "../../assets/icons/preferences/preferences.svg";
import preferencesOrange from "../../assets/icons/preferences/preferencesOrange.svg";
import "./preferences.css";

export const PreferencesBarDesktop = () => {
  const [prefOnHover, setPrefOnHover] = useState(false);

  return (
    <div className="preferencesBar">
      <h2 className="titleHeartbeat">Fridgile</h2>
      <div
        onMouseEnter={() => {
          setPrefOnHover(true);
        }}
        onMouseLeave={() => {
          setPrefOnHover(false);
        }}
      >
        {prefOnHover ? (
          <img src={preferencesOrange} alt="" className="preferencesIcon" />
        ) : (
          <img src={preferencesBlack} alt="" className="preferencesIcon" />
        )}
      </div>
    </div>
  );
};
