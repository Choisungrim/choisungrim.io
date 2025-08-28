import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/resumeCareer.css";

import SkillSection from "./SkillSection";
import { skillActions, skillCategories } from "../data/skillsData";
import ButtonRow from "./ButtonRow";

const ResumeSkill = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "skill";
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (path) => navigate(path);
  const actions = skillActions; // 그냥 상수로 사용

  return (
    <div style={{ padding: "20px" }}>
      <ButtonRow actions={actions} onNavigate={handleNavigate} />

      <div className="resume-container">
        <h1 className="resume-title">기술 상세 내용</h1>

        <section className="resume-section">
          {skillCategories.map((cat) => (
            <SkillSection key={cat.id} title={cat.title} items={cat.items} />
          ))}
        </section>
      </div>

      <ButtonRow actions={actions} onNavigate={handleNavigate} />
    </div>
  );
};

export default ResumeSkill;
