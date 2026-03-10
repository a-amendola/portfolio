import React from 'react';
import './AshleyIntro.css';
import ashleyImage from '../assets/ashley2.webp'

export function AshleyIntro() {
  return (
    <section className="ashley-intro" id='story'>
      <div className="intro-container">
        <h2 className="intro-title">My story</h2>
        <img src={ashleyImage} alt="Ashley professional headshot" loading="lazy"/>
        <div className="intro-text">
            <h3>Hi! I'm Ashley, a web developer with a bit of a backstory.</h3>
            <div className="intro-paragraphs">
                <p>I graduated from Penn State in 2024 with degrees in computer science and economics. During one of my internships, I fell in love with frontend development, as there's something magical about combining my technical knowledge with my creative side.</p>
                <p>But here's where it gets interesting: instead of taking a traditional job after graduation, I booked a one-way ticket to Bangkok. I spent months solo backpacking through Thailand, Indonesia, Malaysia, India, and Vietnam. I met travelers who worked remotely while living their dream lives, and I thought: <i>why can't I do this?</i></p>
                <p>So in the start of 2025, I started freelancing. Now I design and build websites for small businesses while traveling the world. I'm living proof that you can chase multiple dreams at once — and that taking the leap, even when you're terrified, is always worth it.</p>
            </div>
            <a href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" className='a-bubble'><h4>View my full resume →</h4></a>
        </div>
      </div>
    </section>
  );
}