import React, { useState } from 'react';
import './App.css';
import SignInButton from './components/Sign-in';

function App () {
  const [userName, setUserName] = useState('');

  // Function to update the userName state
  const updateUserName = (name) => {
    setUserName(name);
  };

  // Pass the updateUserName function as a prop to the SignInButton component
  return (
    <div>
      <h1>note app</h1>
      <SignInButton updateUserName={updateUserName} />
      {userName ? (
        // If the user is logged in, display the sign-out button
        <h1>Welcome, {userName}!</h1>
      ) : (
        // If the user is not logged in, display the sign-in button
        <h1>login</h1>
      )}
    </div>
  );
  return (
    <div>
      <h1>note app</h1>
      <SignInButton />
      {userName ? (
        // If the user is logged in, display the sign-out button
        <h1>Welcome, {userName}!</h1>
      ) : (
        // If the user is not logged in, display the sign-in button
        <h1>login</h1>
      )}
    </div>
  );
};

export default App;
