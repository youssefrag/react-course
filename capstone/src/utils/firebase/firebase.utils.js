import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACQ8QKSWAvZfYXmNgFhuEdKx4-xpSA7Zw",
  authDomain: "crwn-clothing-db-32b9f.firebaseapp.com",
  projectId: "crwn-clothing-db-32b9f",
  storageBucket: "crwn-clothing-db-32b9f.appspot.com",
  messagingSenderId: "444432771037",
  appId: "1:444432771037:web:fc4d2340c30e31b043f834",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
