import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the first real image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselWrapperRef = useRef(null);

  const images = [
    'https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/09/pixel-8-tease-2.jpg?ssl=1',
    'https://images.moneycontrol.com/static-mcnews/2024/08/20240812064613_Screenshot-2024-08-12-121333.jpg?impolicy=website&width=1600&height=900',
    'https://www.techciti.com.au/media/catalog/category/google-banner.jpg',
  ];

  const totalSlides = images.length;
  const extendedImages = [images[totalSlides - 1], ...images, images[0]]; // Clone first and last images

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Handle automatic slide transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTransitioning) {
        nextSlide();
      }
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId);
  }, [isTransitioning]);

  // Handle seamless transition
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false); // Temporarily disable transition
      if (currentIndex === 0) {
        setCurrentIndex(totalSlides); // Jump to the last real image
      } else if (currentIndex === totalSlides + 1) {
        setCurrentIndex(1); // Jump to the first real image
      }
    };

    const wrapper = carouselWrapperRef.current;
    wrapper.addEventListener('transitionend', handleTransitionEnd);

    return () => wrapper.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, totalSlides]);

  // Apply transform and transition
  useEffect(() => {
    if (carouselWrapperRef.current) {
      carouselWrapperRef.current.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
      carouselWrapperRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex, isTransitioning]);

  // Reset transition state
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50); // Small delay to re-enable transition
    }
  }, [isTransitioning]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <buttons className="prev" onClick={prevSlide}>❮</buttons>
        <div className="carousel-wrapper" ref={carouselWrapperRef}>
          {extendedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
          ))}
        </div>
        <buttons  className="next" onClick={nextSlide}>❯</buttons>
      </div>
    </div>
  );
};

export default Carousel;
