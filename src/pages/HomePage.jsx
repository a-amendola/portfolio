import './homepage.css'
import ashleyImage from '../assets/ashley.JPG'

export function HomePage() {
    return (
        <section className="home-page flex">
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