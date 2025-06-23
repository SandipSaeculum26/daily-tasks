import React from "react";
import { BrowserRouter, Route, Routes } from "react-dom"; // ✅ FIXED THIS LINE
import Home from "./components/Home";


const App = () => {
  return (
    <>
    <Home/>
    </>
  );
};

export default App;
