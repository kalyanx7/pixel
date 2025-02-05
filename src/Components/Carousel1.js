import React, { useState, useEffect } from 'react';
import './Carousel1.css'; // Add CSS for styling

const Carousel = () => {
  const slides = [
    { id: 1, text: "'Best smartphone of 2024'", subText: "(about Pixel 8 series)", award: "Global Mobile Awards" },
    { id: 2, text: "'Revolutionary AI capabilities in a phone'", subText: "(about Pixel 8 series)", award: "TechRadar" },
    { id: 3, text: "'The most powerful smartphone camera on the market.'", subText: "(about Pixel 8 series)", award: "ENGADGET" },
    { id: 4, text: "'The AI features are well worth the investment.'", subText: "(about Pixel 8 series)", award: "FORBES VETTED" },
    { id: 5, text: "'A game-changer in mobile photography'", subText: "(about Pixel 8 series)", award: "The Verge" },
    { id: 6, text: "'Unmatched performance and battery life'", subText: "(about Pixel 8 series)", award: "CNET" },
    { id: 7, text: "'The best Android experience you can get'", subText: "(about Pixel 8 series)", award: "Android Authority" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousell">
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
