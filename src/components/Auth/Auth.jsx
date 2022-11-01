import React from "react";
import "./Auth.css";
import { signInWithGoogle } from "../../firebase";

export const Auth = () => {
  <div>
    <div className="auth">
      <button onClick={signInWithGoogle}>Sign In with Goggle</button>
    </div>
  </div>;
};
