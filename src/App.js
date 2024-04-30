import React from 'react';
import './App.css';
import Login from './components/login';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getApps } from "firebase/app";
console.log(getApps());

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpg1OL9y1IwBUmcHkAO9fbiK2oCyeqygY",
  authDomain: "fir-test-54b71.firebaseapp.com",
  databaseURL: "https://fir-test-54b71-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-test-54b71",
  storageBucket: "fir-test-54b71.appspot.com",
  messagingSenderId: "88082620350",
  appId: "1:88082620350:web:4926b3e35305f7cd39a3ef",
  measurementId: "G-0GVQYZYF0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <div className="App">
      <h1>Firebase Test</h1>
      <Login />
    </div>
  );
}

export default App;
