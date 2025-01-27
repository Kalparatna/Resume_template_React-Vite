import React from "react";
import "../assets/styles/Resume.css";

const Header = () => {
  return (
    <header className="resume-header">
      <div className="header-content">
        <h1>John Doe</h1>
        <h2>Full Stack Developer</h2>
        <div className="social-links">
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
          <p><b>📞 +123 456 7890</b> | <b>✉️ johndoe@example.com</b> </p>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
