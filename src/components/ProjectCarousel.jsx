import React, { useState } from 'react';
import './ProjectCarousel.css';
import trinetrip from '../assets/trine-trip.webp'
import helpinghands from '../assets/helpinghands.webp'
import psb from '../assets/psb-parade.webp'
import maps from '../assets/maps.webp'
import rescueMisunderstood from '../assets/rescueMisunderstood.webp'
import dawnLmhc from '../assets/mccarthy-lmhc.webp'
import daybreak from '../assets/daybreak.webp'
import socialStays from '../assets/social-stays.webp'

const projects = [
  {
    id: 1,
    name: "MAPS",
    industry: "Industrial Contractor",
    image: maps,
    url: "https://mapscollc.com",
    shortDescription: "Industrial contractor site with advanced SEO and third-party integrations.",
    goals: "Redesign and migrate an outdated website to a modern, professional custom-coded site that reflects the quality of their work and ranks for service-based searches across the Southeast.",
    services: ["Custom design & color scheme", "Full React development", "Complete content writing", "Professional photo sourcing", "Instagram feed integration", "Advanced SEO package", "Google Analytics & Search Console", "Website hosting", "Ongoing maintenance"],
    techStack: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    shortResult: "",
    results: ""
  },
  {
    id: 2,
    name: "Dawn McCarthy LMHC",
    industry: "Individual & Couples Therapy",
    image: dawnLmhc,
    url: "https://dawnmccarthylmhc.com",
    shortDescription: "Therapy practice site designed to convert visitors into booked consultations.",
    goals: "Build a five-page site that attracts new therapy clients, makes booking a consultation frictionless, and displays practice information in a logical and beautiful way.",
    services: ["Custom design & color scheme", "Full React development", "Professional photo sourcing", "Custom logo creation", "Online booking integration", "Instagram feed integration", "Advanced SEO package", "Website hosting"],
    techStack: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    shortResult: "",
    results: ""
  },
  {
    id: 3,
    name: "Daybreak EMDR Consulting",
    industry: "EMDR Consulting",
    image: daybreak,
    url: "https://daybreakemdrconsulting.com",
    shortDescription: "One-page landing site for EMDR Consulting business.",
    goals: "Establish credibility for an EMDRIA Approved Consultant and give visiting therapists a clear, professional resource for booking a consultation.",
    services: ["Custom design & color scheme", "Full React development", "Advanced SEO package", "Google Analytics & Search Console", "Website hosting"],
    techStack: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    shortResult: "",
    results: ""
  },
  {
    id: 4,
    name: "Trine Trip",
    industry: "Travel Company",
    image: trinetrip,
    url: "https://trinetrip.com/",
    shortDescription: "19-page extensive travel website with complete content writing.",
    goals: "Create an attractive site that displays all information for potential customers, providing a resource to share to avoid repetitive communication.",
    services: ["Custom design & color scheme", "Full development", "Complete content writing", "Professional photo sourcing", "SEO optimization", "Google analytics & search console", "Website hosting", "Ongoing maintenance"],
    techStack: ["HTML", "CSS", "JavaScript"],
    shortResult: "325% increase in clicks",
    results: ["177% increase in impressions", "325% increase in website clicks"]
  },
  {
    id: 5,
    name: "Helping Hands",
    industry: "ABA Therapy",
    image: helpinghands,
    url: "https://helpinghandschildcare.org/",
    shortDescription: "Bilingual therapy center website with blog CMS and professional design.",
    goals: "Expand existing website with more information, maintain brand consistency, add Spanish language support, and integrate blog functionality.",
    services: ["Custom design", "Framer development", "Professional image sourcing", "Custom SVG creation", "Full spanish translation", "Blog CMS setup & training", "SEO optimization", "Google analytics & search console"],
    techStack: ["Framer", "Custom HTML"],
    shortResult: "103% increase in impressions",
    results: ["103% increase in impressions", "94% increase in website clicks"]
  },
  {
    id: 6,
    name: "Rescue for the Misunderstood",
    industry: "Nonprofit Dog Rescue",
    image: rescueMisunderstood,
    url: "https://www.savethemisunderstood.org",
    shortDescription: "Dog rescue site redesigned and migrated to Squarespace 7.1.",
    goals: "Migrate from Squarespace 7.0 to 7.1, complete visual rebrand with an earthy boutique aesthetic, fix functional issues, and add new pages including a self-managed CMS page for available dogs.",
    services: ["Squarespace 7.1 migration", "Visual redesign & color scheme", "Adopted dogs gallery with 200+ images", "Custom CSS", "CMS setup & training", "Instagram feed integration", "PayPal donation integration", "Bug fixes"],
    techStack: ["Squarespace", "Custom CSS"],
    shortResult: "",
    results: ""
  },
  {
    id: 7,
    name: "The Social Stays",
    industry: "Cafe & Hospitality",
    image: socialStays,
    url: "https://a-amendola.github.io/social-stays/",
    shortDescription: "Digital menu and ordering system for a cafe, with orders sent directly to staff via WhatsApp.",
    goals: "Give guests at a café in Tirthan Valley a fast, digital menu they can browse by category and order from directly, tied to their room number for staff fulfillment.",
    services: ["Custom React build", "Mobile-first design strategy", "WhatsApp deep-link ordering flow", "Room/bed guest identification", "Auto-scrolling category navigation", "Website hosting"],
    techStack: ["React", "JavaScript", "CSS", "HTML", "Vite"],
    shortResult: "",
    results: ""
  },
  {
    id: 8,
    name: "Pennsport String Band",
    industry: "Mummers Band",
    image: psb,
    url: "https://pennsportstringband.com",
    shortDescription: "Member-focused website with secure PDF library and elder-friendly design.",
    goals: "Create an easy-to-use website for band members (ages 40-60+) to access sheet music, and to attract new members and event bookings.",
    services: ["Age-appropriate design", "Full development", "Content writing", "Organization of 300+ PDFs", "Password-protected section", "SEO optimization"],
    techStack: ["HTML", "CSS", "JavaScript"],
    shortResult: "",
    results: ""
  }
];

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--background)" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project-carousel-section" id='projects'>
      <div className="carousel-container">
        <h2 className="carousel-title">Featured work</h2>
        <h3 className="carousel-subtitle">
          Real projects, real results. See how I've helped businesses create their digital presence.
        </h3>

        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-inner">
                <div className="project-card-image">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </div>
                <div className="project-card-content">
                  <div className="project-industry">{project.industry}</div>
                  <h3 className="project-name">{project.name}</h3>
                  {project.shortResult && <p className='project-result'>{project.shortResult}</p>}
                  <p className="project-description">{project.shortDescription}</p>
                  <button className="project-view-btn">View Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

            <div className="modal-body">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="modal-image"
                loading="lazy"
              />

              <div className="modal-industry">{selectedProject.industry}</div>
              <h2 className="modal-title">{selectedProject.name}</h2>

              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  Visit Website →
                </a>
              )}

              <div className="modal-tech-stack">
                {selectedProject.techStack.map((tech, index) => (
                  <span key={index} className="modal-tech-badge">{tech}</span>
                ))}
              </div>

              <div className="modal-grid">
                <div className="modal-section">
                  <h3 className="modal-section-title">Project Goals</h3>
                  <p className="modal-section-text">{selectedProject.goals}</p>
                  {selectedProject.results && (
                    <div className="modal-results">
                      <h3 className="modal-section-title">SEO results 3-months post launch</h3>
                      <ul className="modal-services-list">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="modal-service-item"><span>{result}</span></li>
                        ))}
                      </ul>
                    </div>
                  )}
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
}