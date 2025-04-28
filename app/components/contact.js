import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative rounded-lg bg-gray-800 p-6 group overflow-hidden">
      {/* Neon border effect - matching Profile component */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute inset-0.5 rounded-lg bg-gray-800"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Connect With Me
        </h2>
        
        <div className="space-y-4">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/muhammad-khairulazhar-bin-kahar-bb4733118/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20"
          >
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              <FaLinkedin size={24} />
            </div>
            <span className="text-white">LinkedIn</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/khai218" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20"
          >
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
              <FaGithub size={24} />
            </div>
            <span className="text-white">GitHub</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
          </a>
          
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/profile.php?id=100010106830045&locale=ms_MY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20"
          >
            <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
              <FaFacebook size={24} />
            </div>
            <span className="text-white">Facebook</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
          </a>
        </div>
        
        {/* Floating glowing dots - matching Profile component */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default Contact;