import React from "react";
import "./Mobilecard.css";

const Mobilecard = () => {
  const Mobilecard = [
    {
        img: "https://lh3.googleusercontent.com/ylZRh_2LhVKOd15aZc7AQbK6agCNzW6mOf0HxD1X21txbPuR9Mb2GEvT9wcdMVhgMmhN2GEiUSNJa6uuxW5W1ezJITAfkbbCodE=s0", // Replace with your image URL
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
        ), shadow: "0 4px 6px rgba(141, 231, 149, 0.83)",
      },
    {
      img: "https://lh3.googleusercontent.com/5tWQ36NHDgO2WYcxuI1zZNez6Z08aOY7PpR0F_UfJgHAXpOoRLYJg2MKUfc05_W1m76TV_pKcuRRqt20z4c64BqzV3myBJkSNA=s0", // Replace with your image URL
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
      ),shadow: "0 4px 6px rgba(246, 143, 239, 0.83)",
    },
    {
      img: "https://lh3.googleusercontent.com/9vj5udvCu8aUgEBlUUuR86RROXcYvGGNfRPsMNVv62UXKfD26yklx05BSM_whhThrXOzRSK4WCIXa81V_TFAuyyaDJxEbfQqlds=s0", // Replace with your image URL
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
      ),shadow: "0 4px 6px rgb(23, 0, 86)",
    },
    
  ];

  return (
        <div className="card-container">
        {Mobilecard.map((card, index) => (
            <div className="card" key={index}
            style={{ boxShadow: card.shadow }} // Apply unique shadow here
            >
            <img src={card.img} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            </div>
        ))}
        </div>
  );
};

export default Mobilecard;
