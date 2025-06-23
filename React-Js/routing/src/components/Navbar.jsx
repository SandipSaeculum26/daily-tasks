import React from 'react'
import { NavLink, } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to="/home">Home</NavLink><br />
        <NavLink to="/About" className={({ isActive }) =>
     isActive ? "active" : ""} >About</NavLink><br/>
        <NavLink to="/Contact">Contact</NavLink>
      </ul>
    </div>
  );
}

export default navbar