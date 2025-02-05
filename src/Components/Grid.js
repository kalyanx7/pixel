import React from "react";
import "./Grid.css";

export default function PixelLanding() {
  return (
    <div className="containeeer">
      {/* Header */}
   

      {/* Grid Layout */}
      <div className="feature-grid">
        {/* Camera Section */}
        <div className="feature-card">
          <h1>Extraordinary camera. Effortless editing.</h1>
          <p>
            The award-winning Pixel Camera works clever magic to do light and
            dark shots with perfect pitch and tone.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <img
            src="https://www.telstra.com.au/content/dam/tcom/library/tex-exchange/TEX_RFI_GooglePixel6Portrait_article_824x464.jpg"
            alt="Pixel phone features"
            className="feature-image"
          />
        </div>

        {/* AI & Assistant Section */}
        <div className="feature-card full-width">
          <h1>Do almost anything, like it's nothing.</h1>
          <p>
            Google helps take and boost creativity with hands-on intelligence.
            From voice to translations to the Google Assistant, you get the best
            of Google in your Pixel.
          </p>
        </div>

        {/* Security Section */}
        <div className="feature-card">
          <h1>Pixel helps protect you and your info.</h1>
          <p>
            Your data stays secure with multiple layers of security. The built-in
            Titan M2 security chip helps protect your most sensitive data.
          </p>
          <img
              src="https://lh3.googleusercontent.com/4ondx3Q91fCzkqdyrinmkK0HnYOwKvWDX3vFHR6clKPFskMwzxBzJKGyoYeVZO_vFZCE76WOb5ruhnpYM1mOg_6i0rIaa5TG7Q=rw-e365-w3000"
              alt="Security features"
              className="feature-image"
            />
        </div>

        {/* Durability Section */}
        <div className="feature-card">
          <h1>Built to last. And last. And last.</h1>
          <p>
            Help keep your Pixel protected with Corning® Gorilla® Glass Victus™.
            Your Pixel stays tough, stands up to splashes, scratches, and more.
          </p>
          <img
              src="https://lh3.googleusercontent.com/YWrXYmN2275rVjJj7-3QUckswpjRjcXLsetLljl13_WkeNlMZCLhLDOtu7KP7i-wLP1f-0786tCpATUj2LIIvh0gnz5y0el6n8E=rw-e365-w3000"
              alt="Durability features"
              className="feature-image"
            />
         
        </div>
      </div>
    </div>
  );
}
