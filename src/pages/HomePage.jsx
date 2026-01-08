import './homepage.css'
import ashleyImage from '../assets/ashley.JPG'

export function HomePage() {
    return (
        <section className="home-page flex">
            <div className="wave-container">
                <svg 
                    className="wave-background"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 3600 800" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M0,400 C200,200 400,200 600,400 C800,600 1000,600 1200,400 C1400,200 1600,200 1800,400 C2000,600 2200,600 2400,400 C2600,200 2800,200 3000,400 C3200,600 3400,600 3600,400" 
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="30"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="1"
                    />
                </svg>
            </div>

            <div className="hero flex">
                <div className="hero-left">
                    <img src={ashleyImage} alt="Ashley" />
                </div>
                <div className="hero-right">
                    <h1>Your business deserves a better website.</h1>
                    <h2>I'm Ashley, a website developer focused on modern, clean design.</h2>
                </div>
            </div>
        </section>
    );
}