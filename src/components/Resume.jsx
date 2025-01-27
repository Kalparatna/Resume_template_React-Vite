import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";
import Achievements from "./Achievements";
import "../assets/styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <Header />
      <main className="resume-content">
        <AboutMe />
        <WorkExperience />
        <Projects />
        <Education />
        <Skills />
        <Languages />
        <Achievements />
      </main>
    </div>
  );
};

export default Resume;
