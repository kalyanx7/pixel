import React, { useRef, useState, useEffect } from "react";

const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // To track when the section is visible on screen

  const cards = [
    {
      title: "Bring all your stuff",
      description: "Move contacts, photos, messages, and more in about 20 minutes."
    },
    {
      title: "Choose what to copy",
      description: "Transfer apps, contacts, and photos easily to your new device."
    },
    {
      title: "Plenty of pairing options",
      description: "Pixel works with AirPods®, Wear OS, and Fitbit smartwatches."
    },
  ];

  // IntersectionObserver to track when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the section is in view
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#444",
          marginTop:"150px",
          marginBottom: "30px",
        }}
      >
        Easy to switch. So much to love.
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                index === 0 ? "#eaf2ff" : index === 1 ? "#e9f7df" : "#fff8e5",
              borderRadius: "12px",
              boxShadow: isVisible
                ? "0 4px 12px rgba(0, 0, 0, 0.2)"
                : "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "24px",
              width: "250px",
              textAlign: "center",
              transition: "all 1s ease-in-out, transform 0.3s ease",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              marginBottom: "40px",
              color: "#333",
              cursor: "pointer", // Cursor changes to pointer on hover
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#333",
              }}
            >
              {card.title}
            </h3>
            <div
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.5",
              }}
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
