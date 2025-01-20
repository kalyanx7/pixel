import React, { useState, useEffect } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [animateForm, setAnimateForm] = useState(false);
  const [animateDescription, setAnimateDescription] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    // Trigger animations when the component is loaded
    const handleScroll = () => {
      const formElement = document.querySelector('.contact-form-right');
      const descriptionElement = document.querySelector('.contact-form-left');

      if (formElement.getBoundingClientRect().top < window.innerHeight) {
        setAnimateForm(true);
      }

      if (descriptionElement.getBoundingClientRect().top < window.innerHeight) {
        setAnimateDescription(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case it's already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="contact-form-container" id="contact">
      <div className={`contact-form-right ${animateForm ? 'animate-right' : ''}`}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <div className={`contact-form-left ${animateDescription ? 'animate-left' : ''}`}>
        <h2>Why Contact Us?</h2>
        <p>
          We value your feedback and would love to hear from you. Whether you have a question, suggestion, or need support, feel free to reach out to us. Our team is here to assist you!
        </p>
        <p>
          We will get back to you as soon as possible to address your concerns. Thank you for choosing our services!
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
