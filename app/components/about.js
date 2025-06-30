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
            I&apos;m an Information Technology graduate from Politeknik Kuching
            Sarawak, passionate about building efficient and user-friendly web
            applications. I combine what I&apos;ve learned in class with real
            project experience.
          </p>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-300 mb-4">
              Technical Proficiencies:
            </h2>

            {/* Languages */}
            <div className="mb-4">
              <h3 className="text-md font-medium text-white mb-2 flex items-center">
                <span className="text-purple-400 mr-2">▹</span>
                <strong>Languages:</strong>
              </h3>
              <div className="flex flex-wrap gap-2 ml-6">
                <span className="px-3 py-1 bg-yellow-900/50 text-yellow-300 rounded-full text-sm border border-yellow-700/30 hover:bg-yellow-800/70 transition-colors">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/30 hover:bg-purple-800/70 transition-colors">
                  PHP
                </span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/30 hover:bg-blue-800/70 transition-colors">
                  Python
                </span>
                <span className="px-3 py-1 bg-orange-900/50 text-orange-300 rounded-full text-sm border border-orange-700/30 hover:bg-orange-800/70 transition-colors">
                  SQL
                </span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/30 hover:bg-green-800/70 transition-colors">
                  C++
                </span>
                <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm border border-red-700/30 hover:bg-red-800/70 transition-colors">
                  Java
                </span>
              </div>
            </div>

            {/* Web Development */}
            <div className="mb-4">
              <h3 className="text-md font-medium text-white mb-2 flex items-center">
                <span className="text-purple-400 mr-2">▹</span>
                <strong>Web Development:</strong>
              </h3>
              <div className="flex flex-wrap gap-2 ml-6">
                <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm border border-cyan-700/30 hover:bg-cyan-800/70 transition-colors">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-900/50 text-gray-300 rounded-full text-sm border border-gray-700/30 hover:bg-gray-800/70 transition-colors">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-teal-900/50 text-teal-300 rounded-full text-sm border border-teal-700/30 hover:bg-teal-800/70 transition-colors">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm border border-red-700/30 hover:bg-red-800/70 transition-colors">
                  Laravel
                </span>
                <span className="px-3 py-1 bg-emerald-900/50 text-emerald-300 rounded-full text-sm border border-emerald-700/30 hover:bg-emerald-800/70 transition-colors">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm border border-indigo-700/30 hover:bg-indigo-800/70 transition-colors">
                  Express
                </span>
              </div>
            </div>

            {/* DBMS */}
            <div className="mb-4">
              <h3 className="text-md font-medium text-white mb-2 flex items-center">
                <span className="text-purple-400 mr-2">▹</span>
                <strong>DBMS:</strong>
              </h3>
              <div className="flex flex-wrap gap-2 ml-6">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/30 hover:bg-blue-800/70 transition-colors">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-slate-900/50 text-slate-300 rounded-full text-sm border border-slate-700/30 hover:bg-slate-800/70 transition-colors">
                  PostgreSQL
                </span>
              </div>
            </div>

            {/* Tools */}
            <div className="mb-4">
              <h3 className="text-md font-medium text-white mb-2 flex items-center">
                <span className="text-purple-400 mr-2">▹</span>
                <strong>Tools:</strong>
              </h3>
              <div className="flex flex-wrap gap-2 ml-6">
                <span className="px-3 py-1 bg-rose-900/50 text-rose-300 rounded-full text-sm border border-rose-700/30 hover:bg-rose-800/70 transition-colors">
                  Git
                </span>
                <span className="px-3 py-1 bg-sky-900/50 text-sky-300 rounded-full text-sm border border-sky-700/30 hover:bg-sky-800/70 transition-colors">
                  Visual Studio Code
                </span>
                <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm border border-indigo-700/30 hover:bg-indigo-800/70 transition-colors">
                  IntelliJ
                </span>
                <span className="px-3 py-1 bg-amber-900/50 text-amber-300 rounded-full text-sm border border-amber-700/30 hover:bg-amber-800/70 transition-colors">
                  Postman
                </span>
              </div>
            </div>
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
