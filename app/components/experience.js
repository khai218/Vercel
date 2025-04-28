import React from "react";

const Experience = () => {
  return (
    <div className="relative rounded-lg bg-gray-800 p-6 group overflow-hidden">
      {/* Teckguan logo background 
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/teck-guan1.svg" 
          alt="Teckguan Background" 
          className="w-full h-full object-contain"
        />
      </div>
      */}
      
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute inset-0.5 rounded-lg bg-gray-800"></div>

      <div className="relative z-10 text-white space-y-4 h-126">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Experience
        </h1>

        <div className="space-y-4">
          {/* Teckguan Experience */}
          <div className="bg-gray-700/50 p-4 rounded-lg border-l-4 border-purple-500">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <h2 className="text-lg font-semibold text-blue-300">
                IT Intern - Teckguan Group
              </h2>
              <span className="text-gray-400 text-sm">
                6 Jan 2025 - 2 May 2025
              </span>
            </div>
            
            <ul className="mt-2 space-y-2 text-gray-300">
              <li className="flex">
                <span className="text-purple-400 mr-2">▹</span>
                Conducted hardware and network infrastructure inspections to ensure optimal performance
              </li>
              <li className="flex">
                <span className="text-purple-400 mr-2">▹</span>
                Developed multiple React components for internal systems, improving user experience
              </li>
              <li className="flex">
                <span className="text-purple-400 mr-2">▹</span>
                Collaborated with cross-functional teams to troubleshoot technical issues
              </li>
              <li className="flex">
                <span className="text-purple-400 mr-2">▹</span>
                Documented system processes and created technical manuals
              </li>
            </ul>
          </div>

          {/* Skills Applied */}
          <div>
            <h2 className="text-lg font-semibold text-blue-300 mb-2">Skills Applied:</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Hardware Maintenance</span>
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">Network Troubleshooting</span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Technical Documentation</span>
            </div>
          </div>
        </div>

        {/* Glowing effect on hover */}
        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default Experience;