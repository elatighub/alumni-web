import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;