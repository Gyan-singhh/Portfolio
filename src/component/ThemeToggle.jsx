import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors flex items-center justify-center ${
        darkMode
          ? "bg-gray-700 hover:bg-gray-600 text-amber-300"
          : "bg-gray-200 hover:bg-gray-300 text-gray-700"
      }`}
      aria-label="Toggle dark mode"
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FiSun className="h-5 w-5" />
      ) : (
        <FiMoon className="h-5 w-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
