import React from "react";

function About({ darkMode }, ref) {
  return (
    <section
      id="about-me"
      ref={ref}
      className={`py-20 px-4 sm:px-6 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            About Me
          </h2>
          <p
            className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            MERN Stack Developer in the making — building modern, maintainable
            web apps and always eager to learn, grow, and take on new
            challenges. Skilled in C++ (with a focus on DSA) and Python, I bring
            both problem-solving and full stack development together to build
            real-world solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-6 pl-8 rounded-xl shadow-lg transition-all hover:shadow-2xl ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-green-900/50 text-green-400"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                Languages
              </h3>
            </div>

            <ul className="space-y-2">
              {["C", "C++", "Python", "Javascript"].map((lang) => (
                <li key={lang} className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      darkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    {lang}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`p-8 rounded-xl shadow-lg transition-all hover:shadow-2xl ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center mb-6">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-green-900/50 text-green-400"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                Education
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  B.Tech in Computer Science
                </h4>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Gurukula Kangri (Deemed to be University), Haridwar
                </p>
              </div>
              <div
                className={`p-3 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <p className="font-medium text-center">CGPA: 8.3</p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 pl-8 rounded-xl shadow-lg transition-all hover:shadow-2xl ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-750"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center mb-3">
              <div
                className={`p-2 rounded-lg mr-4 ${
                  darkMode
                    ? "bg-green-900/50 text-green-400"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                Projects
              </h3>
            </div>

            <ul className="space-y-2">
              {[
                {
                  name: "CodeRunner",
                  desc: "Online code execution platform",
                },
                {
                  name: "The Auction Place",
                  desc: "Online bidding platform",
                },
                {
                  name: "Hospital Management App",
                  desc: "Patient records m..",
                },
                {
                  name: "Airbnb Clone",
                  desc: "Property rental application",
                },
              ].map((project) => (
                <li key={project.name} className="flex items-start gap-2">
                  <span
                    className={`mt-2 w-2 h-2 rounded-full ${
                      darkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  <div>
                    <h5
                      className={`font-medium ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      {project.name}{" "}
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        ({project.desc})
                      </span>
                    </h5>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
