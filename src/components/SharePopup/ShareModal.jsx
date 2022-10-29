/*
    written by Josip Brljevic
    Popup after you press the share icon
*/

import { useState } from "react";
import "./ShareModal.css";
import ShareIcon from "../../assets/recipesimages/share.svg";
import Messenger from "../../assets/recipesimages/messenger.svg";
import WhatsApp from "../../assets/recipesimages/WhatsApp.svg";
import Instagram from "../../assets/recipesimages/Instagram.svg";
import Copy from "../../assets/recipesimages/Copy.svg";

export default function ShareModal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <img src={ShareIcon} alt="shareicon"></img>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p className="share">Share</p>
            <p className="sharetext">
              Share the ingredients list with your friend to check if they have
              the ingredients you're missing.
            </p>
            <div className="socialicons">
              <div className="socialmediaicon-text">
                <div className="socialiconcontainer">
                  <img src={Messenger} alt="Messenger"></img>
                </div>
                <p>Messenger</p>
              </div>
              <div className="socialmediaicon-text">
                <div className="socialiconcontainer">
                  <img src={WhatsApp} alt="WhatsApp"></img>
                </div>
                <p>WhatsApp</p>
              </div>
              <div className="socialmediaicon-text">
                <div className="socialiconcontainer">
                  <img src={Instagram} alt="Instagram"></img>
                </div>
                <p>Instagram</p>
              </div>
              <div className="socialmediaicon-text">
                <div className="socialiconcontainer">
                  <img src={Copy} alt="Copy"></img>
                </div>
                <p>Copy</p>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
