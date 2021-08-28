import React from 'react';

// Components
import Login from './Login';

let loggedIn = false;

function App() {
  return (
    <div className="container">
      {loggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;