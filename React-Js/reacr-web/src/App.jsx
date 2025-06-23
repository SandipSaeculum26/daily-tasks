import "./App.css";
import React from "react";
import Child from "./assets/components/child.jsx"; // Capital "C"
import Card from "./assets/components/card.jsx";
import Footer from "./assets/components/Footer.jsx";
const App = () => {
  return (
        <div className="h-screen px-2"> 
          <Child />
          <Card />
          <Footer/>
        </div>
      );
}

export default App