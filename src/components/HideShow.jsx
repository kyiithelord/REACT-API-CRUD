import React, { useState } from "react";
import "./HideShow.jsx"; // Create this file in the next step
import Content from "./Content.jsx";

const HideShow = () => {
  const [isContentVisible, setContentVisibility] = useState(false);

  const toggleVisibility = () => {
    setContentVisibility(!isContentVisible);
  };

  return (
    <div className="container mx-auto my-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Hide/Show Component</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleVisibility}
      >
        {isContentVisible ? "Hide Content" : "Show Content"}
      </button>
      {isContentVisible && <Content />}
    </div>
  );
};

export default HideShow;
