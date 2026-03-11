import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import ashleyImage from '../assets/ashley.webp';

export function LoadingScreen({ onLoadComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minDisplayTime = 1500;
    const img = new Image();
    img.src = ashleyImage;
    img.onload = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          onLoadComplete();
        }, 300);
      }, remainingTime);
    };
  }, [onLoadComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-brand">
        <svg className="loading-logo" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 90 L45 10 Q47 6 50 10 L75 90 M35 55 H60 M55 90 L80 10 Q82 6 85 10 L110 90 M70 55 H95"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="loading-namestack">
          <p className="loading-name"><b>Ashley Amendola</b></p>
          <p className="loading-title">Web Developer</p>
        </div>
      </div>

      <div className="loading-text">
        <span>Loading</span>
        <span className="dot dot-1">.</span>
        <span className="dot dot-2">.</span>
        <span className="dot dot-3">.</span>
      </div>
    </div>
  );
}