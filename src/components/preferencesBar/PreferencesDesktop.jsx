import { useState } from "react";
import preferencesBlack from "../../assets/icons/preferences/preferences.svg";
import preferencesOrange from "../../assets/icons/preferences/preferencesOrange.svg";
import "./preferences.css";

export const PreferencesBarDesktop = () => {
  const [prefOnHover, setPrefOnHover] = useState(false);

  return (
    <div
      className="preferencesBar"
      onMouseEnter={() => {
        setPrefOnHover(true);
      }}
      onMouseLeave={() => {
        setPrefOnHover(false);
      }}
    >
      <h2>Fridgile</h2>
      <div>
        {prefOnHover ? (
          <img src={preferencesBlack} alt="" className="preferencesIcon" />
        ) : (
          <img src={preferencesOrange} alt="" className="preferencesIcon" />
        )}
      </div>
    </div>
  );
};
