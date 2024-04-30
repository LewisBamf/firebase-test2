import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Update import path
import 'firebase/compat/auth'; // Update import path
import firebaseConfig from '../firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [userName, setUserName] = useState(null);

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUserName(user.displayName);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                setUserName(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            {userName ? (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>

            ) : (
                <div>
                    <h1>Hello {userName}</h1>
                    <button onClick={handleLogout}>signOut</button>
                </div>
            )}

        </div>
);
};

export default Login;
