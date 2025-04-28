import React from "react";

const About = () => {
  return (
    <div className="relative rounded-lg bg-gray-800 p-4 sm:p-6 md:p-8 group overflow-hidden">
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute inset-0.5 rounded-lg bg-gray-800"></div>

      <div className="relative z-10 text-white space-y-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="space-y-5">
          <p className="text-gray-300 text-sm sm:text-base">
            I&apos;m a recent <strong>Information Technology</strong> graduate from Politeknik Kuching Sarawak with a passion for creating efficient, user-friendly web applications. My journey in tech combines formal education with hands-on project experience.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">
              Technical Proficiencies:
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                <span><strong>Languages:</strong> JavaScript, PHP, Python, SQL</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                <span><strong>Frontend:</strong> React, HTML5, CSS3, Tailwind</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                <span><strong>Backend:</strong> Laravel, Node.js, Express</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                <span><strong>Database:</strong> MySQL, MongoDB</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                <span><strong>Tools:</strong> Git, VS Code, Postman</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-300 mb-2">
              Current Interests:
            </h2>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                Exploring AI/ML integration with web applications
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                Progressive Web Apps (PWAs) and modern web APIs
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">▹</span>
                Cloud computing and serverless architectures
              </li>
            </ul>
          </div>

        </div>

        {/* Glowing effect on hover */}
        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default About;
