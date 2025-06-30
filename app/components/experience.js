import Image from "next/image";
import React, { useState } from "react";

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative rounded-lg bg-gray-800 p-6 group overflow-hidden">
        {/* Neon border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
        <div className="absolute inset-0.5 rounded-lg bg-gray-800"></div>

        <div className="relative z-10 text-white space-y-6">
          {/* Header */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h1>

          {/* Company Card */}
          <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300">
            {/* Company Logo and Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Logo Placeholder - Replace with actual logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/tglogobigcompress.png"
                  alt="Teckguan Group Logo"
                  width={26}
                  height={26}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">
                  Teckguan Group
                </h2>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  IT Intern
                </h3>
                <p className="text-gray-400 text-sm">
                  6 Jan 2025 - 23 May 2025 • 4 months 3 weeks
                </p>
              </div>
            </div>

            {/* Brief Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              Gained hands-on experience in IT infrastructure management and web
              development, contributing to both hardware maintenance and
              software development projects.
            </p>

            {/* Key Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/30">
                React
              </span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/30">
                Hardware Maintenance
              </span>
              <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/30">
                Network Infrastructure
              </span>
            </div>

            {/* Details Button */}
            <button
              onClick={openModal}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View Details
            </button>
          </div>

          {/* Glowing effect on hover */}
          <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600">
            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/tglogobigcompress.png"
                  alt="Teckguan Group Logo"
                  width={26}
                  height={26}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-1">
                  IT Intern at Teckguan Group
                </h2>
                <p className="text-gray-400">
                  Jan 2025 - May 2025 • 5 months 
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Detailed Experience */}
            <div className="space-y-6 text-white">
              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">
                  Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  During my internship at Teckguan Group, I gained comprehensive
                  experience in IT infrastructure management and web
                  development. I worked closely with the IT team to maintain
                  hardware systems, troubleshoot network issues, and develop
                  user-facing applications using modern web technologies.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">
                  Key Responsibilities
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <div>
                      <h4 className="font-medium text-white">
                        Hardware & Network Infrastructure
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Conducted regular inspections of hardware systems and
                        network infrastructure to ensure optimal performance and
                        identify potential issues before they became critical.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <div>
                      <h4 className="font-medium text-white">
                        React Development
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Developed multiple React components for internal
                        systems, focusing on improving user experience and
                        interface functionality for company operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <div>
                      <h4 className="font-medium text-white">
                        Technical Troubleshooting
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Collaborated with cross-functional teams to diagnose and
                        resolve technical issues, providing timely solutions to
                        minimize operational disruptions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <div>
                      <h4 className="font-medium text-white">Documentation</h4>
                      <p className="text-gray-300 text-sm">
                        Created comprehensive technical manuals and documented
                        system processes to improve knowledge sharing and
                        operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">
                  Technologies & Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <h4 className="font-medium text-white mb-2">
                      Frontend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">
                        React
                      </span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">
                        JavaScript
                      </span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">
                        HTML/CSS
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <h4 className="font-medium text-white mb-2">
                      IT Infrastructure
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">
                        Hardware Maintenance
                      </span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">
                        Network Troubleshooting
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">
                  Key Achievements
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">
                      Successfully developed and deployed multiple React
                      components for internal use
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">
                      Improved system documentation and knowledge sharing
                      processes
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">
                      Maintained 100% system uptime during hardware maintenance
                      activities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
