import './navbar.css'

export function NavBar({ theme, setTheme }) {
    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <nav className="nav-bar">
            <div className="nav-section">
                <div className="logo">
                    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 90 L45 10 Q47 6 50 10 L75 90
                            M35 55 H60
                            M55 90 L80 10 Q82 6 85 10 L110 90
                            M70 55 H95"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <p>Ashley Amendola's portfolio</p>
            </div>
            <div className="nav-section">
                <button 
                    onClick={toggleTheme} 
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDark ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}