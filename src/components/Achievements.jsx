import React from "react";

const Achievements = () => {
  const achievements = [
    "Winner of Hackathon 2023",
    "Certified AWS Cloud Practitioner",
    "Graduated with honors in Computer Science"
  ];

  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
