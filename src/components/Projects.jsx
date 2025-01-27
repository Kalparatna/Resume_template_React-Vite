import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      github: "https://github.com/johndoe/portfolio",
      live: "https://johndoe.com",
      description: ["Built a personal portfolio using React.", "Showcases projects and skills."]
    },
    {
      title: "E-commerce App",
      github: "https://github.com/johndoe/ecommerce",
      live: "https://ecommerce.johndoe.com",
      description: ["Developed a full-stack e-commerce app.", "Implemented payment gateway and product management."]
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
          <ul>
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
