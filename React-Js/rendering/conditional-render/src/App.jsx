import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const renderContent = () => {
    switch (activeTab) {
      case "customer":
        return <div>Customer Information Content</div>;
      case "company":
        return <div>Company Information Content</div>;
      case "product":
        return <div>Product Information Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="info-tabs">
      <div className="tabs">
        {["customer", "company", "product"].map((tab) => (
          <div
         //   key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} 
          </div>
        ))}
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default App;
