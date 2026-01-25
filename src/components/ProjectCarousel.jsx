import React, { useState } from 'react';
import './ProjectCarousel.css';
import trinetrip from '../assets/trek.jpg'
import helpinghands from '../assets/helpinghands.jpg'
import psb from '../assets/psb-parade.jpg'
import ashleyHero from '../assets/ashley-portfolio.jpg'

const projects = [
  {
    id: 1,
    name: "Trine Trip",
    industry: "Travel Company",
    image: trinetrip,
    url: "https://trinetrip.com/",
    shortDescription: "Comprehensive travel website with complete content creation and SEO optimization.",
    goals: "Create an attractive site that displays all information for potential customers, providing a resource to share without repetitive communication.",
    services: ["Custom design & color scheme", "Full development", "Complete content writing", "Professional photo sourcing", "SEO optimization", "Google analytics & search console", "Ongoing monitoring"],
    techStack: ["HTML", "CSS", "JavaScript"],
    results: "Improved search visibility and streamlined customer communication."
  },
  {
    id: 2,
    name: "Helping Hands",
    industry: "ABA Therapy",
    image: helpinghands,
    url: "https://helpinghandschildcare.org/",
    shortDescription: "Bilingual therapy center website with blog CMS and professional design.",
    goals: "Expand existing website with more information, maintain brand consistency, add Spanish language support, and integrate blog functionality.",
    services: ["Custom design", "Framer development", "Image sourcing & SVG creation", "Full spanish translation", "Blog CMS setup & training", "SEO optimization", "Google analytics & search console"],
    techStack: ["Framer", "Custom HTML"],
    results: "Successfully reached Spanish-speaking community while maintaining SEO strength."
  },
  {
    id: 3,
    name: "Pennsport String Band",
    industry: "Mummers Band",
    image: psb,
    url: "https://a-amendola.github.io/pennsport-string-band/",
    shortDescription: "Member-focused website with secure PDF library and elder-friendly design.",
    goals: "Create an easy-to-use website for band members (ages 40-60+) to access sheet music, attract new members and event bookings.",
    services: ["Age-appropriate design", "Full development", "Content writing", "Organization of 300+ PDFs", "Password-protected section", "SEO optimization"],
    techStack: ["HTML", "CSS", "JavaScript"],
    results: "Streamlined music access for members while protecting proprietary content."
  },
  {
    id: 4,
    name: "My Portfolio",
    industry: "Personal Portfolio",
    image: ashleyHero,
    url: "https://ashleyamendola.com",
    shortDescription: "Modern portfolio showcasing web development work and services.",
    goals: "Display previous projects and services to attract new clients with a professional, clean design (this website!).",
    services: ["Custom design", "React development", "Content writing", "Photo sourcing", "Logo design & SVG creation", "Dark mode implementation", "SEO Setup"],
    techStack: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    results: "Professional showcase of skills and completed projects."
  }
];

// Simple Chevron SVG components (replacing lucide-react)
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--background)" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section className="project-carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-title">Featured work</h2>
        <h3 className="carousel-subtitle">
          Real projects, real results. See how I've helped businesses create their digital presence.
        </h3>

        {/* Carousel */}
        <div className="carousel-wrapper">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="carousel-nav-btn carousel-nav-prev"
            aria-label="Previous project"
          >
            <ChevronLeft />
          </button>
          
          <button
            onClick={nextSlide}
            className="carousel-nav-btn carousel-nav-next"
            aria-label="Next project"
          >
            <ChevronRight />
          </button>

          {/* Project Cards */}
          <div className="carousel-track">
            {getVisibleProjects().map((project) => {
              const isCenter = project.position === 0;
              const offset = project.position * 380;
              
              return (
                <div
                  key={project.id}
                  className={`project-card ${isCenter ? 'project-card-center' : 'project-card-side'}`}
                  style={{
                    transform: `translateX(${offset}px) scale(${isCenter ? 1 : 0.85})`,
                    zIndex: isCenter ? 10 : 5,
                    opacity: isCenter ? 1 : 0.6,
                  }}
                  onClick={() => isCenter && setSelectedProject(project)}
                >
                  <div className="project-card-inner">
                    {/* Image */}
                    <div className="project-card-image">
                      <img
                        src={project.image}
                        alt={project.name}
                      />
                      {!isCenter && <div className="project-card-overlay"></div>}
                    </div>

                    {/* Content */}
                    <div className="project-card-content">
                      <div className="project-industry">{project.industry}</div>
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-description">{project.shortDescription}</p>
                      {isCenter && (
                        <button className="project-view-btn">
                          View Details →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            {/* Modal Content */}
            <div className="modal-body">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="modal-image"
              />

              <div className="modal-industry">{selectedProject.industry}</div>
              <h2 className="modal-title">{selectedProject.name}</h2>
              
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                Visit Website →
              </a>

              <div className="modal-tech-stack">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="modal-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

              <div className="modal-grid">
                <div className="modal-section">
                  <h3 className="modal-section-title">Project Goals</h3>
                  <p className="modal-section-text">{selectedProject.goals}</p>
                </div>

                <div className="modal-section">
                  <h3 className="modal-section-title">Services Provided</h3>
                  <ul className="modal-services-list">
                    {selectedProject.services.map((service, index) => (
                      <li key={index} className="modal-service-item">
                        <span className="modal-service-check">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedProject.results && (
                <div className="modal-results">
                  <h3 className="modal-section-title">Results</h3>
                  <p className="modal-section-text">{selectedProject.results}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}