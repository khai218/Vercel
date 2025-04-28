import React from "react";

const Profile = () => {
  return (
    <div className="relative rounded-lg bg-gray-800 p-6 group overflow-hidden">
      {/* Neon border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      <div className="absolute inset-0.5 rounded-lg bg-gray-800"></div>

      <div className="relative z-10 text-white space-y-3">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {"Hello, I'm Khairulazhar, still Intern"}
        </h1>
        
        <p className="text-gray-300">
          IT Diploma Graduate specializing in web development with Laravel and React.
        </p>
        
        <p className="text-gray-300">
          Passionate about building modern web applications and currently exploring 
          AI/ML technologies to expand my skill set. I'm particularly interested in 
          how artificial intelligence can enhance web development workflows and user experiences.
        </p>
        
        <p className="text-gray-300">
          Committed to continuous learning and staying updated with emerging technologies 
          in both web development and machine learning fields.
        </p>

        {/* Optional glowing effect on hover */}
        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500 rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default Profile;