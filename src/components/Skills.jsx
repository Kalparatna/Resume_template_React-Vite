import React from "react";

const Skills = () => {
  const skills = ["React.js", "Node.js", "JavaScript", "CSS", "Git"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
