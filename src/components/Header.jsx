import React from "react";
import "../assets/styles/Resume.css";

const Header = () => {
  return (
    <header className="resume-header">
      <div className="header-content">
        <h1>Mark Smith</h1>
        <h2>Softaware Developer</h2>
        <div className="social-links">
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">Github</a>
            <a 
      href="https://github.com/johndoe" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
    >
      <FaGithub size={20} />
      GitHub (John Doe)
    </a>

          <p><b>📞+123 456 7890</b> | <b>✉️ marksmith@example.com</b> </p>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
