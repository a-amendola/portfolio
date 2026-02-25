import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    company: "Trine Trip",
    clientName: "Ritesh Kukrety",
    testimonial: "I had a logo and a domain, but honestly no clue what I wanted for the website. Ashley worked with me to figure everything out from scratch. The final result is amazing. The colors match my brand perfectly, the design is beautiful, and she even added smart features like automatically updating my latest YouTube video on the homepage. This site has been a game-changer for reaching customers, and her ongoing SEO work has been worth every dollar. She turned my lack of direction into a website that's exactly what my business needed.",
    url: "https://trinetrip.com/"
  },
  {
    id: 2,
    company: "Helping Hands",
    clientName: "Amy Davis",
    testimonial: "I highly recommend Ashley Amendola's services. She recently built a multi page website design for my company. She is thorough, communicative, and timely in all that she does. I was very impressed at how she listened to the vision of my company and was able to turn those ideas into a website. Its has improved my brand, impact in the community, and converted leads to clients.",
    url: "https://helpinghandschildcare.org/"
  },
  {
    id: 3,
    company: "Pennsport String Band",
    clientName: "Frank Lusch",
    testimonial: "We contracted Ashley to revamp our band website. She took into consideration the age of our band members and made navigation easy. We were kept up to date on progress regularly and our expectations for a simple, efficient website were exceeded. Most importantly, she was able to password protect our member page for privacy. We are so pleased with the results and would highly recommend using her services for any website needs.",
    url: "https://pennsportstringband.com"
  }
];

// Quote SVG Icon
const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C12 20.686 14.686 18 18 18V12C11.373 12 6 17.373 6 24V36H18V24H12Z" fill="currentColor"/>
    <path d="M30 24C30 20.686 32.686 18 36 18V12C29.373 12 24 17.373 24 24V36H36V24H30Z" fill="currentColor"/>
  </svg>
);

// Arrow SVG Icons
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Client testimonials</h2>

        <div className="testimonial-card">
          <div className="quote-icon">
            <QuoteIcon />
          </div>

          <div className="testimonial-content">
            <p className="testimonial-text">"{currentTestimonial.testimonial}"</p>
            
            <div className="testimonial-author">
                <div className="author-name">{currentTestimonial.clientName}</div>
                <div className="author-company">{currentTestimonial.company}</div>
                <a href={currentTestimonial.url} className="visit-site" target="_blank" rel="noopener noreferrer">Visit website →</a>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonial-nav">
            <button 
              onClick={prevTestimonial} 
              className="nav-btn nav-btn-prev"
              aria-label="Previous testimonial"
            >
              <ArrowLeft />
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`testimonial-dot ${index === currentIndex ? 'dot-active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial} 
              className="nav-btn nav-btn-next"
              aria-label="Next testimonial"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}