import React, { useState, useRef } from 'react';
import './Carousel1.css'; // Add CSS for styling

const Carousel = () => {
  const slides = [
    { id: 1, text: "'Best smartphone of 2024'", subText: "(about Pixel 8 series)", award: "Global Mobile Awards" },
    { id: 3, text: "'The most powerful smartphone camera on the market.'", subText: "(about Pixel 8 series)", award: "ENGADGET" },
    { id: 4, text: "'The AI features are well worth the investment.'", subText: "(about Pixel 8 series) ", award: "FORBES VETTED" },
    // Add more slides here if needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);  
  const [startX, setStartX] = useState(0); // Track the starting touch position
  const [endX, setEndX] = useState(0); // Track the ending touch position

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Record the start position of the touch
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX); // Record the move position
  };

  const handleTouchEnd = () => {
    if (startX - endX > 50) {
      handleNext(); // Swipe left (move to next slide)
    } else if (endX - startX > 50) {
      handlePrev(); // Swipe right (move to previous slide)
    }
  };

  return (
    <div className="carousell"
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
    >
      <button className="carousel-button left" onClick={handlePrev}>&lt;</button>
      <div className="carousel-slide">
        <h2>{slides[currentSlide].text}</h2>
        <p>{slides[currentSlide].subText}</p>
        <h3>{slides[currentSlide].award}</h3>
      </div>
      <button className="carousel-button right" onClick={handleNext}>&gt;</button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
