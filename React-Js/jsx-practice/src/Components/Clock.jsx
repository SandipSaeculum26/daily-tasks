import React, { use, useEffect } from 'react'
import { useState } from 'react';


const Clock = ({color}) => {

const [Time , setTime] = useState(0);
 
useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

}, [])

  return (
    <>
    <div>
      <h1>Welcome to the Clock Component</h1>
      <h1 style={{color:color, backgroundColor:"gray", width:"200px",padding:"10px", borderRadius:"10px"}}>{Time}</h1>
    </div>
    </>
  )
}

export default Clock