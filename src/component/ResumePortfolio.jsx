import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/resumeCareer.css";

import { portfolioProjects, portfolioActions } from "../data/portfolioData";
import ButtonRow from "./ButtonRow";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="imagebox" onClick={(e) => e.stopPropagation()}>
        <button className="close" aria-label="닫기" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

function ImageThumb({ src, alt, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      className="inline-image_one"
      onClick={onClick}
      loading="lazy"
    />
  );
}

function SubSection({ title, items }) {
  return (
    <div className="sub-section">
      <strong>{title}</strong>
      <ul>
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, onOpenImage }) {
  const { title, overview, details, images } = project;
  return (
    <div className="highlight">
      <h2>{title}</h2>
      <div className="flex-container">
        <div className="text-content">
          <div className="section-block">
            <strong>프로젝트 개요</strong>
            <ul>
              {overview.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="section-block">
            <strong>개발 소개</strong>
            <SubSection title={details.team.title} items={details.team.items} />
            <SubSection
              title={details.period.title}
              items={details.period.items}
            />
            <SubSection
              title={details.responsibility.title}
              items={details.responsibility.items}
            />
            <SubSection
              title={details.stack.title}
              items={details.stack.items}
            />
          </div>
        </div>
        {images?.length > 0 && (
          <div className="image-container">
            {images.map(({ src, alt }, idx) => (
              <ImageThumb
                key={idx}
                src={src}
                alt={alt}
                onClick={() => onOpenImage(src)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const ResumePortfolio = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = "portfolio";
    setModalImage(null);
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (path) => navigate(path);
  const openModal = useCallback((src) => setModalImage(src), []);
  const closeModal = useCallback(() => setModalImage(null), []);

  const actions = portfolioActions; // 그냥 상수로 사용
  const projects = portfolioProjects;

  return (
    <div style={{ padding: 20 }}>
      <ButtonRow actions={actions} onNavigate={handleNavigate} />
      <div className="resume-container">
        <h1 className="resume-title">포트폴리오</h1>
        <section className="resume-section">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpenImage={openModal} />
          ))}
        </section>
      </div>
      <Modal isOpen={!!modalImage} onClose={closeModal}>
        <img src={modalImage || ""} alt="Selected" className="modal-image" />
      </Modal>
      <ButtonRow actions={actions} onNavigate={handleNavigate} />
    </div>
  );
};

export default ResumePortfolio;
