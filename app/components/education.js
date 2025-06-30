import Image from "next/image";
import React, { useState } from "react";

const Education = () => {
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
            Education
          </h1>

          {/* Education Card */}
          <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300">
            {/* Logo and Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/unnamed.png"
                  alt="Politeknik Logo"
                  width={26}
                  height={26}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">
                  Politeknik Kuching Sarawak
                </h2>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  Diploma in ICT (Digital Technology)
                </h3>
                <p className="text-gray-400 text-sm">Sept 2022 – Sept 2025 (Expected)</p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              Currently pursuing a Diploma in Information and Communication Technology with a specialization in Digital Technology. Developed strong foundations in software development, networking, and hardware integration.
            </p>

            {/* Key Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/30">
                Laravel
              </span>
              <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/30">
                React
              </span>
              <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm border border-green-700/30">
                IoT Projects
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

          <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>

          <div className="relative bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/unnamed.png"
                  alt="Politeknik Logo"
                  width={26}
                  height={26}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-1">
                  Diploma in ICT (Digital Technology)
                </h2>
                <p className="text-gray-400">2022 – 2025</p>
              </div>

              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-white">
              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  Studying digital technology with a focus on full-stack web development,
                  embedded systems, networking, and database management. Completed
                  multiple real-world projects that involve Laravel, React, Arduino, and biometric technology.
                </p>
              </div>

              {/* Key Modules */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Key Subjects</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Web Application Development using Laravel</li>
                  <li>React.js and JavaScript Frontend Projects</li>
                  <li>IoT Integration with Arduino & ESP32-CAM</li>
                  <li>Database Design with MySQL</li>
                  <li>Computer Networking & Security</li>
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Key Projects</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Smart Attendance System with Face & Fingerprint Recognition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Blood Storage Matching Platform (Python + XAMPP)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Admin Dashboard for Biometric Event Attendance</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Technologies & Tools</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Laravel</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">React</span>
                      <span className="px-2 py-1 bg-blue-900/50 text-blue-300 rounded text-xs">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <h4 className="font-medium text-white mb-2">Other Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">Arduino</span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">ESP32-CAM</span>
                      <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs">MySQL</span>
                    </div>
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

export default Education;
