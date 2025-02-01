import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2Aq8KkNRevXigj2NbiRctH-4oYUHay8k",
  authDomain: "diyhub-21b6e.firebaseapp.com",
  projectId: "diyhub-21b6e",
  storageBucket: "diyhub-21b6e.firebasestorage.app",
  messagingSenderId: "513261615347",
  appId: "1:513261615347:web:472d40c3eef9d832135f86",
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });

  return user;
};
