import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY-a3UAZv0tqaNdktxanKddctmZjRNa78",
  authDomain: "fridgile-61dd7.firebaseapp.com",
  projectId: "fridgile-61dd7",
  storageBucket: "fridgile-61dd7.appspot.com",
  messagingSenderId: "30865850000",
  appId: "1:30865850000:web:9c1468a635f0e735a5a215",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
