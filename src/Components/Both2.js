import React, { useRef, useEffect, useState } from "react";
import "./Both.css";

function Both() {
  const imgRef = useRef(null); // Ref to track the image element
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Optional: Reset animation when not visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <div
          className={`img ${isVisible ? "animate" : ""}`} // Add animation class when visible
          ref={imgRef}
        >
          <img
            src="https://lh3.googleusercontent.com/oxBmci3p0m6ZK02DFBHFuyT4eI2EgiBPcSws99Bb3SCKrFl4As8RvVTWjnduho1R_GPvVdWyUivEkrzC6kg3RtROECZDpyTwbrs=s3000-w3000-e365-rw-v0-nu"
            alt="Sidebar"
          />
        </div>
      </div>
      <div className="main-content">
      <h1>Amazing photos after dark.</h1>
        <p>
          Bring your vision to life with advanced camera settings like shutter
          speed, manual focus, and more. The camera also supports full-resolution
          images.
        </p>
      </div>
    </div>
  );
}

export default Both;
