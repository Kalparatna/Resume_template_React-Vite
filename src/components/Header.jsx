import React from "react";
import "../assets/styles/Resume.css";

const Header = () => {
  return (
    <header className="resume-header">
      <div className="header-content">
        <h1>Mark Smith</h1>
        <h2>Full Stack Developer</h2>
        <div className="social-links">
          <a href="https://linkedin.com/in/makrsmith" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/makrsmith" target="_blank" rel="noopener noreferrer">GitHub</a>
          <p><b>📞 +123 456 7890</b> | <b>✉️ makrsmith@example.com</b> </p>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
