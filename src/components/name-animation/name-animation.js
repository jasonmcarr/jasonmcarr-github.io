import React, { useState, useEffect } from "react";
import "./name-animation.css";

function NameAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAnimationPlayed = localStorage.getItem("isAnimationPlayed");
    if (!isAnimationPlayed) {
      setIsVisible(true);
      localStorage.setItem("isAnimationPlayed", true);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div className="name-animation">
          <h1 className="name">Jason Carr Portfolio</h1>
          <div className="overlay"></div>
        </div>
      )}
    </>
  );
}

export default NameAnimation;
