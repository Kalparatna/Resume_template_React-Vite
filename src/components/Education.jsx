import React from "react";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science",
      institution: "University of Tech",
      startYear: "2014",
      endYear: "2018"
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p>{edu.institution} | {edu.startYear} - {edu.endYear}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
