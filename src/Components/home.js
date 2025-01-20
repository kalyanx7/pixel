import React, { useRef, useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './home.css';



const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    // Toggle menu state
    const toggleMenu = () => {
      setMenuOpen(prevState => !prevState);
    };
  
    // Close menu
    const closeMenu = useCallback(() => {
      setMenuOpen(false);
    }, []);
  
    return (
      <div className="Navbar">
        {/* Left Section - Logo */}
        <div className="left">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Logo"
            className="logo"
          />
        </div>
  
        {/* Hamburger Icon (only visible on mobile) */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        {/* Mobile Navigation Menu */}
        <nav className={`right ${menuOpen ? 'menu-open' : ''}`}>
          <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="/about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="/services" className="nav-link" onClick={closeMenu}>Services</a>
          <a href="/#contact" className="nav-link" onClick={closeMenu}>Contact Us</a>
          <a href="/SignUp" className="SignUpH" onClick={closeMenu}>Sign Up</a>
          <a href="/login" className="loginH" onClick={closeMenu}>Login</a>
        </nav>
      </div>
    );
  };

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
  
  const Cardss = () => {
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
  
    return (
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
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
  
  const AnimatedText = () => {
    const [isVisible, setIsVisible] = useState(false); // State to track visibility
    const textRef = useRef(null); // Ref to track the component
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when component enters viewport
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the component is visible
      );
  
      if (textRef.current) {
        observer.observe(textRef.current);
      }
  
      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
    }, []);
  
    return (
      <div className="animated-text-container">
        <h1
          ref={textRef}
          className={`animated-text ${isVisible ? 'visible' : ''}`}
        >
          <span>The only phone engineered by </span>
          <span className="google-letter blue">G</span>
          <span className="google-letter red">o</span>
          <span className="google-letter yellow">o</span>
          <span className="google-letter blue">g</span>
          <span className="google-letter green">l</span>
          <span className="google-letter red">e</span>
        </h1>
      </div>
    );
  };
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
      <div className="container">
        <div className="sidebar">
          <div
            className={`img ${isVisible ? "animate" : ""}`} // Add animation class when visible
            ref={imgRef}
          >
            <img
              src="https://lh3.googleusercontent.com/mn9gzaKwRggQbC4RAwI0qggOvVYD0uToVOIfluBqq0SIm6f7-ocfhylbNaHvEZq35nkhHzllfMM60y1CIBvm1aHGRehkIIjkkw=s3000-w3000-e365-rw-v0-nu"
              alt="Sidebar"
            />
          </div>
        </div>
        <div className="main-content">
          <h1>Control your camera like a pro.</h1>
          <p>
            Bring your vision to life with advanced camera settings like shutter
            speed, manual focus, and more. The camera also supports full-resolution
            images.
          </p>
        </div>
      </div>
    );
  }
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
            className={`image-wrapper ${isVisible ? "visible" : ""}`}
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
      <div className="container">
        <div className="sidebar">
          <div
            className={`img ${isVisible ? "animate" : ""}`} // Add animation class when visible
            ref={imgRef}
          >
            <img
              src="https://lh3.googleusercontent.com/oxBmci3p0m6ZK02DFBHFuyT4eI2EgiBPcSws99Bb3SCKrFl4As8RvVTWjnduho1R_GPvVdWyUivEkrzC6kg3RtROECZDpyTwbrs=s3000-w3000-e365-rw-v0-nu"
              alt="Sidebar"
            />
          </div>
        </div>
        <div className="main-content">
        <h1>Amazing photos after dark.</h1>
          <p>
            Bring your vision to life with advanced camera settings like shutter
            speed, manual focus, and more. The camera also supports full-resolution
            images.
          </p>
        </div>
      </div>
    );
  }

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
  
  const Video = () => {
    return (
      <div className="video-container">
        <div className="video-background">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=CGUQ0G1OX6c"
            playing={true}
            muted={true}
            loop={true}
            controls={false} // Hides the controls
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: {
                  controls: 0,    // Hides the YouTube player controls
                  rel: 0,         // Prevents related videos from showing up
                  showinfo: 0,    // Hides video title
                  modestbranding: 1, // Reduces YouTube branding
                  fs: 0,          // Disables fullscreen button
                  iv_load_policy: 3, // Hides annotations
                  autohide: 1     // Hides controls when not in use
                }
              }
            }}
          />
          <div className="overlay"></div> {/* Overlay to hide UI elements */}
        </div>
      </div>
    );
  }
  
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
  
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h>&copy; The Google Pixel</h>
          </div>
  
          <div className="footer-links">
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
  
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
export default Home; 
  
  
