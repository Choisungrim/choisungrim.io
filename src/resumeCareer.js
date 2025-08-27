// src/ResumeCareer.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/resumeCareer.css";
import { skillCategories } from "./data/skillsData";

// 공용 버튼 행 (resumePortfolio와 동일 패턴)
function ButtonRow({ onNavigate }) {
  const actions = [
    { label: "돌아가기", to: "/" },
    { label: "상세 경력 보기", to: "/loading/resumeCareer" },
    { label: "상세 포폴 보기", to: "/loading/resumePortfolio" },
  ];
  return (
    <div className="button-container_resume">
      {actions.map(({ label, to }) => (
        <button
          key={to}
          className="chatbot-button_resume"
          onClick={() => onNavigate(to)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// 섹션 카드
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

const ResumeCareer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "portfolio";
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (path) => navigate(path);

  return (
    <div style={{ padding: "20px" }}>
      <ButtonRow onNavigate={handleNavigate} />

      <div className="resume-container">
        <h1 className="resume-title">기술 상세 내용</h1>
        <section className="resume-section">
          {skillCategories.map((cat) => (
            <SkillSection key={cat.id} title={cat.title} items={cat.items} />
          ))}
        </section>
      </div>

      <ButtonRow onNavigate={handleNavigate} />
    </div>
  );
};

export default ResumeCareer;
