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
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; text-decoration: none; color: black;">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" style="width: 20px; height: 20px; margin-right: 8px;" />
  <span style="font-weight: bold;">johndoe</span>
</a>

          <p><b>📞+123 456 7890</b> | <b>✉️ marksmith@example.com</b> </p>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
