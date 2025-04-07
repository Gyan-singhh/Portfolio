import React from "react";
import { CgCode } from "react-icons/cg";
import {
  FaLaptopCode,
  FaUser,
  FaUserAstronaut,
  FaUserTie,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiComputerFan } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

function Hero({ darkMode, scrollTo }) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 pt-23 pb-20 bg-gradient-to-br ${
        darkMode
          ? "from-gray-900 to-gray-800 text-white"
          : "from-gray-50 to-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div>
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-xl hover:rotate-2 hover:scale-105 transition-transform">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className={darkMode ? "text-green-400" : "text-green-600"}>
              Gyan Singh
            </span>
          </h1>

          <h2
            className={`text-xl md:text-2xl mb-8 font-medium ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Full Stack Web Developer
          </h2>

          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            I love turning ideas into fast, scalable, and engaging digital
            products using the latest in web technology.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://drive.google.com/your-resume-link-here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Download CV
              </button>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className={`px-6 py-3 border-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 ${
                darkMode
                  ? "border-green-400 text-green-400 hover:bg-green-400/10"
                  : "border-green-600 text-green-600 hover:bg-green-600/10"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
