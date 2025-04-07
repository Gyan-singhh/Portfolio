import React from "react";
function Skills({ darkMode }) {
  const skills = [
    {
      name: "HTML5",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=F97316",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=0EA5E9",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=FACC15",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/?size=100&id=123603&format=png&color=60A5FA",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=D8B4FE",
    },
    {
      name: "Tailwind",
      icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=38BDF8",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=86EFAC",
    },
    {
      name: "Express",
      icon: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=10B981",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=EF4444",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/?size=100&id=22813&format=png&color=38BDF8",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=BFDBFE",
    },
    {
      name: "JWT",
      icon: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=FBBF24",
    },
    {
      name: "REST API",
      icon: "https://img.icons8.com/?size=100&id=55497&format=png&color=10B981",
    },
    {
      name: "Postman",
      icon: "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000",
    },
    {
      name: "Linux",
      icon: "https://img.icons8.com/?size=100&id=17842&format=png&color=000000",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
    },
  ];

  return (
    <section
      id="skills"
      className={`py-10 px-6 bg-gradient-to-br ${
        darkMode ? "from-gray-900 to-gray-800" : "from-gray-100 to-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Skills & Technologies
          </h2>
          <p
            className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Technologies I work with
          </p>
        </div>

        <div className="md:pb-10 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-9 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div
                className={`p-2 rounded-lg mb-1 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-17 md:h-15 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://img.icons8.com/?size=100&id=123603&format=png";
                  }}
                />
              </div>
              <span
                className={`text-xs text-center ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
