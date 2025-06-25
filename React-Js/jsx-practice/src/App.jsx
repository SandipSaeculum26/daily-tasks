
import './App.css'
import Clock from "./Components/Clock.jsx";
import React, { useState } from 'react';
function App() {
 
  const [color, setColor] = useState("green");

  return (
    <>
      <div>hello</div>
      <div>
        <select onChange={(e) => setColor(e.target.value)}>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
          <option value={"yellow"}>Yellow</option>
          <option value={"purple"}>Purple</option>
          <option value={"orange"}>Orange</option>
          <option value={"pink"}>Pink</option>
          <option value={"brown"}>Brown</option>
          <option value={"black"}>Black</option>
          <option value={"white"}>White</option>
        </select>
      </div>
      <Clock color={color} />
    </>
  )
}

export default App
