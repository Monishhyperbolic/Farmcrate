import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWuaeWzIw68E2GpZ7Pi_11OivECXz57S4",
    authDomain: "farm-crate.firebaseapp.com",
    projectId: "farm-crate",
    storageBucket: "farm-crate.firebasestorage.app",
    messagingSenderId: "939229248744",
    appId: "1:939229248744:web:f12d28f698c3e24b7d5d5d",
    measurementId: "G-SNXNK0JF49"
};

initializeApp(firebaseConfig);
const auth = getAuth();

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-in Success:", result.user);
      getUserLocation(); 
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Signed out successfully");
      setLocation(null); 
    } catch (error) {
      console.error("Sign-out Error:", error);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="google-login-container">
      <div id="user-info">
        {user ? <p>Hello, {user.displayName}!</p> : null}
      </div>
      {!user ? (
        <button className="google-login-button" onClick={handleSignIn}>
          Sign in with Google
        </button>
      ) : (
        <button className="google-login-button" onClick={handleSignOut}>
          Sign Out
        </button>
      )}
      {location && (
        <div>
          <h3>Your Location:</h3>
          <iframe
            width="200%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"   
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDvUQtkZQPkbdsrDDdCa6ep1UY4Kao5Vgg&q=${location.latitude},${location.longitude}&zoom=15`}
            ></iframe>
        </div>
      )}
    </div>
  );
};

export default GoogleLogin;
