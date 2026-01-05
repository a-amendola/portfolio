import { useEffect, useState } from "react";
import { HomePage } from './pages/HomePage';
import { NavBar } from './components/NavBar'
import './App.css'

function getInitialTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <HomePage />
    </>
  )
}

export default App