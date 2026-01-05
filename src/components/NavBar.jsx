import './navbar.css'

export function NavBar({ theme, setTheme }) {
    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    }

    return (
        <div className="nav-bar">
            <p>Ashley Amendola's portfolio</p>
            <button 
                onClick={toggleTheme} 
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
                {isDark ? "☀️" : "🌙"}
            </button>
        </div>
    );
}