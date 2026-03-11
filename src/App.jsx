import { useEffect, useState } from "react";
import { HomePage } from './pages/HomePage';
import { NavBar } from './components/NavBar'
import { LoadingScreen } from "./components/LoadingScreen";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <HomePage />
    </>
  )
}

export default App