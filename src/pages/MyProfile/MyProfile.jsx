import { useState } from "react";
import "./myProfile.css";
import editIconBlack from "../../assets/icons/editIconBlack.svg";
import editIconOrange from "../../assets/icons/editIconOrange.svg";
import profileImg from "../../assets/images/personProfile.jpeg";
import arrowIconBlack from "../../assets/icons/arrowIconBlack.svg";
import logoutIconBlack from "../../assets/icons/logoutIconBlack.svg";

export const MyProfile = () => {
  const [onHoverEdit, setOnHoverEdit] = useState(false);

  return (
    <div className="profileContainer">
      <div>
        <div className="profileTitleContainer">
          <p>My Profile</p>
          <div
            onMouseEnter={() => setOnHoverEdit(true)}
            onMouseLeave={() => setOnHoverEdit(false)}
          >
            {onHoverEdit ? (
              <img src={editIconOrange} alt="" />
            ) : (
              <img src={editIconBlack} alt="" />
            )}
          </div>
        </div>
        <div className="profileImgContainer">
          <img src={profileImg} alt="" />
          <div className="nameUnderImgProfile">
            <div>Kendell Dell</div>
            <div className="onlineDot"></div>
          </div>
          <p>kendelnumeroUno@gmail.com</p>
        </div>
        <div className="statsContainer">
          <div className="pieContainer">
            <div className="pieBackground"></div>
            <div id="pieSlice25" className="hold">
              <div className="pie"></div>
            </div>
            <div className="stat-circle-cover">
              <div className="stat-number">
                <p>25% </p>
                <p>Food</p>
                <p>Thrown</p>
              </div>
            </div>
          </div>
          <div className="pieContainer">
            <div className="pieBackground"></div>
            <div id="pieSlice50" className="hold">
              <div className="pie"></div>
            </div>
            <div className="stat-circle-cover">
              <span className="stat-number">
                <p>50% </p>
                <p>Food</p>
                <p>Saved</p>
              </span>
            </div>
          </div>
        </div>
        <div className="seeStatsBtn">
          <div>
            <p>See statistics</p>
            <img src={arrowIconBlack} alt="" />
          </div>
        </div>
        <div className="logoutContainer">
          <div>
            <p>Log out</p>
            <img src={logoutIconBlack} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
