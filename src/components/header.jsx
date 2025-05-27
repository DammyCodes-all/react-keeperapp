import EditNoteIcon from '@mui/icons-material/EditNote';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Search, X } from 'lucide-react'


export default function Header({handleQuery}){
    return(
        <header className="w-full bg-yellow-500 dark:bg-gray-800 h-15 shadow-lg flex items-center justify-between p-1 transition-colors duration-300" role="banner">
            <div className="flex items-center">
                <EditNoteIcon className="text-white text-3xl ml-2" aria-hidden="true" />
                <h1 className="text-white text-2xl font-mclaren">Keeper</h1>
            </div>
            <div className="flex items-center md:gap-2 justify-end">
              <SearchBar onHandleQuery={handleQuery} />
              <ThemeToggle />
            </div>
            
        </header>
    )
}



function SearchBar({onHandleQuery}) {
  const [query, setQuery] = useState('');
  useEffect(()=>{
    onHandleQuery(query)
  } , [query , onHandleQuery])
  return (
    <form
      className={`relative w-32 sm:w-40 md:w-48 lg:w-56 h-8 md:h-9 flex items-center px-2 md:px-3 rounded-full transition-all duration-500 bg-white dark:bg-gray-700 focus-within:rounded-[1px] shadow-sm hover:shadow-md`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={`absolute left-0 bottom-0 w-full h-[2px] bg-amber-500 dark:bg-amber-400 origin-center scale-x-0 transition-transform duration-300 ${query ? 'scale-x-100' : 'group-focus-within:scale-x-100'}`}></div>
      <button type="submit" className="text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-200">
        <Search className="w-3 h-3 md:w-4 md:h-4" />
      </button>

      <input
        type="text"
        placeholder="Search notes..."
        className="ml-2 w-full bg-transparent outline-none text-xs md:text-sm placeholder:text-[#8b8ba7] dark:placeholder:text-gray-400 text-gray-800 dark:text-gray-200"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />

      {query && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="opacity-100 visible text-[#8b8ba7] dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <X className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      )}
    </form>
  );
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
    }
  };
  
  return (
    <div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-opacity-0 hover:bg-amber-400 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm text-white shadow-sm hover:shadow-md"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? <DarkModeIcon aria-hidden="true" /> : <LightModeIcon aria-hidden="true" />}
        </button>
    </div>
  );
}


