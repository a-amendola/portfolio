import './homepage.css'
import ashleyImage from '../assets/ashley.JPG'
import { ProjectCarousel } from '../components/ProjectCarousel.jsx'

export function HomePage() {
    return (
        <>
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

                    <svg 
                        className="wave-background"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 3600 800" 
                        preserveAspectRatio="none"
                    >
                        <path 
                            d="M0,350 C250,450 350,450 600,350 C850,250 950,250 1200,350 C1450,450 1550,450 1800,350 C2050,250 2150,250 2400,350 C2650,450 2750,450 3000,350 C3250,250 3350,250 3600,350" 
                            fill="none"
                            stroke="var(--secondary)"
                            strokeWidth="30"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.5"
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

            <section className='what-i-do flex'>
                <h2>What I offer</h2>
                <h3>Every business is different. I provide a full range of services so you can choose what you need, skip what you don't, and get a site that turns visitors into customers.</h3>
                <div className="service-cards">
                    <div className="service-card">
                        <div>
                            <h3>Design & development</h3>
                            <p>Need a complete custom design? I've got you. Already have mockups? That works too. I'll build a responsive, high-performance website tailored to your needs and level of involvement.</p>
                        </div>
                        <div>
                            <h4>Available services:</h4>
                            <ul>
                                <li>Custom web design</li>
                                <li>Fully responsive development</li>
                                <li>Clean, intuitive user experience</li>
                                <li>Rigorous quality testing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-card">
                        <div>
                            <h3>Content & SEO</h3>
                            <p>From content writing to image sourcing to SEO setup, I can handle it all — or just the pieces you need. Tell me what you have, and I'll fill in the gaps.</p>
                        </div>
                        <div>
                            <h4>Available services:</h4>
                            <ul>
                                <li>Professional content writing</li>
                                <li>Image sourcing and optimization</li>
                                <li>SEO strategy and implementation</li>
                                <li>Google Analytics setup</li>
                            </ul>
                        </div>
                    </div>
                    <div className="service-card">
                        <div>
                            <h3>Launch & beyond</h3>
                            <p>Want to make updates yourself? I'll set up a CMS and train you. Prefer ongoing support? I offer maintenance packages. You decide your level of involvement after launch.</p>
                        </div>
                        <div>
                            <h4>Available services:</h4>
                            <ul>
                                <li>CMS setup and training</li>
                                <li>Ongoing website maintenance</li>
                                <li>Performance monitoring</li>
                                <li>Content updates and support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectCarousel />
        </>
    );
}