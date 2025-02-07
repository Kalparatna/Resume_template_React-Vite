import React from "react";

const Languages = () => {
  const languages = ["English", "Spanish", "French"];

  return (
    <section className="languages">
      <h2>Languages</h2>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
