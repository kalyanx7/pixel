import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [inView, setInView] = useState([false, false, false]); // Track if cards are in view
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
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prevState) => {
              const newState = [...prevState];
              newState[index] = true; // Mark card as in view
              return newState;
            });
          }
        });
      },
      { threshold: 0.9 } // Trigger when 50% of the card is in view
    );

    cardsRef.current.forEach((card) => observer.observe(card));

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          className={`card ${inView[index] ? "show" : ""}`} // Add 'show' class when card is in view
          key={index}
          ref={(el) => (cardsRef.current[index] = el)} // Attach reference to each card
          style={{ boxShadow: card.shadow }} // Apply unique shadow here
        >
          <img src={card.img} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
          <div className="card-description">{card.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
