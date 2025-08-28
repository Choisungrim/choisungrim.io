import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/resumeCareer.css";

import ButtonRow from "./ButtonRow";

import {
  careerActions,
  careers,
  licenses,
  links,
  introParagraphs,
  roadmap,
} from "../data/careerData";

/* 공용 모달 */
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

/* 프로젝트 카드 */
function ProjectItem({ project, onOpen }) {
  const {
    title,
    period,
    summary = [],
    achievements = [],
    images = [],
  } = project;
  return (
    <div className="flex-container">
      <div className="text-content">
        <li>
          <strong>{title}</strong>
        </li>
        {period && <p>({period})</p>}
        {summary.length > 0 && (
          <>
            <p>주요 내용</p>
            <ul>
              {summary.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </>
        )}
        {achievements.length > 0 && (
          <>
            <p>프로젝트 성과</p>
            <ul>
              {achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      {images.length > 0 && (
        <div className="image-container">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt || "project"}
              className="inline-image"
              onClick={() => onOpen(img.src, img.alt, img.credit)}
              loading="lazy"
            />
          ))}
          {images.some((i) => i.credit) && (
            <p>
              출처:{" "}
              {images
                .map((i) => i.credit)
                .filter(Boolean)
                .join(", ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* 회사 카드 */
function CareerCard({ career, onOpen }) {
  return (
    <div className="highlight">
      <ul>
        <li>
          <strong>{career.company}</strong> - {career.role} ({career.period})
        </li>
        {career.summaryOnly ? (
          <div className="text-content">
            <ul>
              {career.summaryOnly.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="project-list">
            {career.projects?.map((p, i) => (
              <React.Fragment key={i}>
                <ProjectItem project={p} onOpen={onOpen} />
                {i < career.projects.length - 1 && (
                  <hr className="project-sep" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}

const ResumeCareer = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState({
    open: false,
    src: "",
    alt: "",
    credit: "",
  });

  useEffect(() => {
    document.title = "portfolio";
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = (path) => navigate(path);
  const openModal = (src, alt, credit) =>
    setModal({ open: true, src, alt, credit: credit || "" });
  const closeModal = () =>
    setModal({ open: false, src: "", alt: "", credit: "" });

  return (
    <div style={{ padding: 20 }}>
      <ButtonRow actions={careerActions} onNavigate={handleNavigate} />

      <div className="resume-container">
        <h1 className="resume-title">경력 상세 내용</h1>

        {/* 로드맵 섹션 */}
        <section className="resume-section">
          <div className="roadmap">
            <img
              src={roadmap.image.src}
              alt={roadmap.image.alt}
              className="roadmap-image"
              onClick={() => openModal(roadmap.image.src, roadmap.image.alt)}
              loading="lazy"
            />
          </div>
        </section>

        {/* 경력 섹션 */}
        <section className="resume-section">
          <h2>경력 상세 내용</h2>
          {careers.map((c, idx) => (
            <React.Fragment key={c.id}>
              <CareerCard career={c} onOpen={openModal} />
              {idx < careers.length - 1}
            </React.Fragment>
          ))}
        </section>

        {/* 자격증 */}
        <section className="resume-section">
          <h2>자격증</h2>
          <div className="highlight">
            {licenses.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </section>

        {/* 링크 */}
        <section className="resume-section">
          <h2>링크</h2>
          {links.map((link, i) => (
            <div key={i} className="highlight">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </div>
          ))}
        </section>

        {/* 자기소개서 */}
        <section className="resume-section">
          <h2>자기소개서</h2>
          <div className="highlight">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </div>

      {/* 모달 */}
      <Modal isOpen={modal.open} onClose={closeModal}>
        <img
          src={modal.src}
          alt={modal.alt || "Selected"}
          className="modal-image"
        />
        {modal.credit && (
          <div className="content" style={{ whiteSpace: "pre-line" }}>
            출처: {modal.credit}
          </div>
        )}
      </Modal>

      <ButtonRow actions={careerActions} onNavigate={handleNavigate} />
    </div>
  );
};

export default ResumeCareer;
