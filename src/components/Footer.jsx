import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <section className="footer">
        <div className="nav-section">
            <div className="logo footer-logo">
                <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 90 L45 10 Q47 6 50 10 L75 90
                        M35 55 H60
                        M55 90 L80 10 Q82 6 85 10 L110 90
                        M70 55 H95"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className='footer-name-stack'>
                <p><b>Ashley Amendola</b></p>
                <p>Web Developer</p>
            </div>
        </div>
        <div className="footer-links">
            <a href="/">Home</a>
            <a href="#offers">What I offer</a>
            <a href="#projects">Featured work</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#story">My story</a>
            <a href="#contact">Contact me</a>
        </div>
        <div>
            <p>Copyright © Ashley Amendola • All Rights Reserved</p>
            <p>Website designed and developed by <a href="/" className='portfolio-link'>Ashley Amendola</a></p>
        </div>
    </section>
  );
}