import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignInButton = ({ userName, updateUserName }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Function to handle Google login
  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserName(user.displayName); // Update userName in App.js
        setIsSignedIn(true); // Update isSignedIn state
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to handle logout
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        updateUserName(null); // Update userName in App.js
        setIsSignedIn(false); // Update isSignedIn state
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {isSignedIn ? (
        // If the user is logged in, display the sign-out button
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        // If the user is not logged in, display the sign-in button
        <button onClick={handleGoogleLogin}>Login with Google</button>
      )}
    </div>
  );
};

export default SignInButton;