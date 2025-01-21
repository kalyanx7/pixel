import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [inView, setInView] = useState([]); // Track if cards are in view
  const cardsRef = useRef([]);

  const cards = [
    {
      img: "https://lh3.googleusercontent.com/ylZRh_2LhVKOd15aZc7AQbK6agCNzW6mOf0HxD1X21txbPuR9Mb2GEvT9wcdMVhgMmhN2GEiUSNJa6uuxW5W1ezJITAfkbbCodE=s0",
      title: "Pixel 9",
      description: (
        <>
          CAMERA
          <br />
          50MP
          <br />
          48MP Ultra Wide
          <br />
          --
        </>
      ),
      shadow: "0 4px 6px rgba(141, 231, 149, 0.83)",
    },
    {
      img: "https://lh3.googleusercontent.com/5tWQ36NHDgO2WYcxuI1zZNez6Z08aOY7PpR0F_UfJgHAXpOoRLYJg2MKUfc05_W1m76TV_pKcuRRqt20z4c64BqzV3myBJkSNA=s0",
      title: "Pixel 9 pro",
      description: (
        <>
          CAMERA
          <br />
          50MP
          <br />
          48MP 5x Optical
          <br />
          48MP Ultra wide
        </>
      ),
      shadow: "0 4px 6px rgba(246, 143, 239, 0.83)",
    },
    {
      img: "https://lh3.googleusercontent.com/9vj5udvCu8aUgEBlUUuR86RROXcYvGGNfRPsMNVv62UXKfD26yklx05BSM_whhThrXOzRSK4WCIXa81V_TFAuyyaDJxEbfQqlds=s0",
      title: "Pixel 9 pro XL",
      description: (
        <>
          CAMERA
          <br />
          50MP
          <br />
          48MP 5x Optical
          <br />
          48MP Ultra wide
        </>
      ),
      shadow: "0 4px 6px rgb(23, 0, 86)",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setInView((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    const currentRefs = cardsRef.current.filter(Boolean);
    currentRefs.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          className={`card ${inView[index] ? "show" : ""}`} // Add 'show' class when card is in view
          key={index}
          ref={(el) => (cardsRef.current[index] = el)} // Attach reference to each card
          style={{ boxShadow: card.shadow }} // Apply unique shadow
        >
          <img
            src={card.img}
            alt={card.title}
            className="card-image"
            loading="lazy" // Optimize image loading
          />
          <h3 className="card-title">{card.title}</h3>
          <div className="card-description">{card.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
