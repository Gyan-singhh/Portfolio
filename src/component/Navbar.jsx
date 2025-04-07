import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar({ darkMode, toggleTheme, scrollTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["home", "about-me", "skills", "projects", "contact"];

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-all duration-300 ease-in-out ${
          darkMode ? "bg-gray-800" : "bg-white"
        } ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`p-2 rounded-full ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollTo(item);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-4 rounded-lg transition-colors ${
                darkMode
                  ? "hover:bg-gray-700 hover:text-green-400"
                  : "hover:bg-gray-100 hover:text-green-600"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <nav
        className={`fixed top-0 w-full p-4 z-30 backdrop-blur-md shadow-sm ${
          darkMode ? "bg-gray-800/90" : "bg-white/90"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            className="md:hidden p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu className="h-5 w-5" />
          </button>

          <div className="text-xl font-bold flex items-center gap-2 md:ml-0 mx-auto md:mx-0">
            <span
              className={`hover:transition-colors ${
                darkMode ? "hover:text-green-400" : "hover:text-green-600"
              }`}
            >
              GyanSingh
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-6 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`transition-colors font-medium text-md tracking-wider ${
                    darkMode ? "hover:text-green-400" : "hover:text-green-600"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
