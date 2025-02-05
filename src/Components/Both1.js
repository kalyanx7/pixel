import React, { useRef, useEffect, useState } from "react";
import "./Both1.css";

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
    <div className="containerr">
      <div className="content">
        <h1 style={{fontSize:'38px' }}>The camera that makes you feel seen.</h1>
        <p className="description">
          Real Tone represents the nuances of skin tones beautifully,
          authentically, and accurately in photos and video.
        </p>
      </div>
      <div className="image-containerr">
        <div
          className={`imagee-wrapper ${isVisible ? "visible" : ""}`}
          ref={imgRef}
        >
          <img
            src="https://lh3.googleusercontent.com/KUdRLluB_6x7TD4fK1UoDHOfe1KjT-h6djhIafVlRJPe17HpxvpUn-70garOBsklw2jgH46kssHS7gS2hq8NR7R7ir5fQ8XxNQ=s3000-w3000-e365-rw-v0-nu"
            alt="Sidebar"
          />
        </div>
      </div>
    </div>
  );
}

export default Both;
