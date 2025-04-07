import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects({ darkMode }) {
  const projects = [
    {
      id: 1,
      image: "auctionplace.png",
      title: "Auction Place",
      description:
        "An online auction platform with real-time bidding functionality and secure payments.",
      tags: ["React", "Express", "MongoDB", "Nodemailer", "Cloudinary"],
      codeUrl: "https://github.com/Gyan-singhh/Auctionplace-frontend",
      liveUrl: "https://auctionplace-frontend.onrender.com/",
    },
    {
      id: 2,
      image: "coderunner.png",
      title: "Code Runner",
      description:
        "Interactive coding environment that executes code in multiple programming languages.",
      tags: ["React", "Node.js", "Express", "Piston API", "Tailwind CSS"],
      codeUrl: "https://github.com/Gyan-singhh/Code-Runner",
      liveUrl: "https://code-runner-theta.vercel.app/",
    },
    {
      id: 3,
      image: "airbnb.png",
      title: "Airbnb Clone",
      description:
        "Full-stack vacation rental platform with search, booking, and review features.",
      tags: ["React", "Express", "Mapbox", "Cloudinary", "Tailwind CSS"],
      codeUrl: "https://github.com/Gyan-singhh/Airbnb-clone-react",
      liveUrl: "https://www.youtube.com/watch?v=-oI0GaEfRDQ",
    },
    {
      id: 4,
      image: "hospital.png",
      title: "Hospital Management",
      description:
        "System for managing patient records, appointments, and medical staff schedules.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
      codeUrl: "https://github.com/Gyan-singhh/Hospital-management-system",
      liveUrl: "https://www.youtube.com/watch?v=K3_qiCsNCQA&t=158s",
    },
    {
      id: 5,
      image: "bank.png",
      title: "Banking App",
      description:
        "Mobile-first banking application with transaction history and money transfer.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      codeUrl: "https://github.com/Gyan-singhh/Banking-web-app",
      liveUrl: "https://www.youtube.com/watch?v=9WVms-80mws&t=30s",
    },
    {
      id: 6,
      image: "portfolio.png",
      title: "Personal Portfolio",
      description:
        "A sleek and responsive personal portfolio website showcasing projects, skills, and contact information.",
      tags: ["React", "Tailwind CSS", "Vite", "Formspree"],
      codeUrl: "https://github.com/Gyan-singhh/Portfolio",
      liveUrl: "/",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-15 px-4 sm:px-6 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            My Latest Work
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Explore a collection of projects that highlight my skills in
            full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="relative h-45 overflow-hidden group">
                <img
                  src={`/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t flex items-center justify-center gap-6 ${
                    darkMode
                      ? "from-gray-700/30 to-gray-500/10"
                      : "from-gray-500/20 to-white/10"
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-green-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={20} />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-800 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="View Code"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>

              <div className="px-6 py-3">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  <p
                    className={`hover:underline ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </p>
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {project.description}
                </p>
              </div>

              <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
