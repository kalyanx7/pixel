import React, { useEffect, useState, useRef } from 'react';
import './AnimatedText.css'; // Import the external CSS file

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const textRef = useRef(null); // Ref to track the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when component enters viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="animated-text-container">
      <div className="whole">
        <h1
          ref={textRef}
          className={`animated-text ${isVisible ? 'visible' : ''}`}
        >
           <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap');
        `}
      </style>
          <span style={{ color: "black", fontSize: "100px" }}>The only phone engineered by </span>
          <span className="google-letter blue">G</span>
          <span className="google-letter red">o</span>
          <span className="google-letter yellow">o</span>
          <span className="google-letter blue">g</span>
          <span className="google-letter green">l</span>
          <span className="google-letter red">e</span>
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
