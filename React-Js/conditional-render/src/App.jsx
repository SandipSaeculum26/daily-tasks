import React, { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // spelling corrected from logedIn

  function handleClick() {
    if (loggedIn) {
      alert("You are logged in");
    } else {
     
      alert("You are not logged in");
      setLoggedIn(true);
    }
  }

  return (
    <div className="p-6">
      <h1 className="bg-slate-400 text-white text-2xl p-4 rounded">App</h1>
      <div className="mt-4">
        <button
          onClick={handleClick}
          className="bg-sky-500 hover:bg-sky-600 transition p-3 m-3 rounded-lg text-white"
        >
          Check Login Status
        </button>
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 transition p-3 m-3 rounded-lg text-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;
