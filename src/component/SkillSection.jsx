import React from "react";

function SkillSection({ title, items }) {
  return (
    <div className="highlight">
      <h2>{title}</h2>
      <ul>
        {items.map((s, i) => (
          <li key={i}>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillSection;
