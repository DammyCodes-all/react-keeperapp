import EditNoteIcon from '@mui/icons-material/EditNote';
import { useState , useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header(){
    return(
        <>
        <div className="w-full bg-yellow-500 dark:bg-gray-800 h-15 shadow-lg flex items-center justify-between p-4 transition-colors duration-300">
            <div className="flex items-center">
                <EditNoteIcon className="text-white text-3xl ml-2" />
                <h1 className="text-white text-2xl font-mclaren">Keeper</h1>
            </div>
            <ThemeToggle />
        </div>
        </>
    )
}

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }  };  return (
    <div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-opacity-0 hover:bg-amber-400 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm text-white shadow-sm hover:shadow-md">
          {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
    </div>
  );
}