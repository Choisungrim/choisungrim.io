// src/data/portfolioData.js
import Minefluencer from "../resource/minefluencer.png";
import UmlGenerator from "../resource/UMLGenerator.jpeg";
import Profile_Info from "../resource/Profile_Info.jpeg";
import Influencer_Ranking from "../resource/Influencer_Ranking.JPG";

export const portfolioActions = [
  { label: "돌아가기", to: "/" },
  { label: "상세 경력 보기", to: "/loading/resumeCareer" },
  { label: "상세 기술 보기", to: "/loading/resumeSkill" },
];

export const portfolioProjects = [
  {
    id: "minefluencer",
    title: "MineFluencer",
    overview: [
      "마인플루언서는 사용자의 관심사에 맞춘 인플루언서를 추천하여 쉽고 빠르게 찾을 수 있도록 도와줍니다.",
      "원하는 인플루언서만 모아볼 수 있고, 요즘 핫한 인플루언서를 분야별로 순위를 볼 수 있는 플랫폼입니다.",
    ],
    details: {
      team: {
        title: "팀 구성",
        items: [
          "Front-End 3명 (UI/UX 포함), Back-End 3명 (서버 구성, 아키텍처, DB 포함)",
        ],
      },
      period: { title: "개발 기간", items: ["3개월 (2022.04 ~ 2022.07)"] },
      responsibility: {
        title: "담당 업무",
        items: [
          "Model-View-Controller 구조 설계 및 구현",
          "순위, 회원가입, 조회, 추천, MyList, 관심 분야별 추천, 닉네임 자동완성 등 API 구현",
          "DB 설계 및 쿼리 튜닝",
          "AWS(EC2) 기반 배포 구성",
        ],
      },
      stack: {
        title: "사용 기술 스택",
        items: [
          "Java 8, Spring Framework 5.2.4, JavaScript, AWS(EC2), MariaDB, MyBatis, Linux, Maven",
        ],
      },
    },
    images: [
      { src: Minefluencer, alt: "Minefluencer" },
      { src: Influencer_Ranking, alt: "Influencer Ranking" },
    ],
  },
  {
    id: "intro",
    title: "나를 소개하는 글",
    overview: [
      "자기소개를 담은 페이지를 구성하여 이력서를 정적인 페이지로 언제 어디서나 확인할 수 있게 합니다.",
    ],
    details: {
      team: { title: "팀 구성", items: ["개인"] },
      period: { title: "개발 기간", items: ["2개월 (2024.08 ~ 2024.10)"] },
      responsibility: {
        title: "담당 업무",
        items: [
          "정적 페이지 구현 및 배포",
          "이미지 클릭 시 모달 표시",
          "페이지 전환 애니메이션",
          "Cache 기반 메모장 페이지",
          "UML Generator 연동",
        ],
      },
      stack: {
        title: "사용 기술 스택",
        items: ["React, PlantUML, gh-pages, Node.js, JavaScript"],
      },
    },
    images: [{ src: Profile_Info, alt: "Profile Info" }],
  },
  {
    id: "umlgenerator",
    title: "UMLGenerator",
    overview: [
      "Java Spring의 ApplicationContext를 활용하여 프로젝트 클래스 정보와 PlantUML annotation을 읽고,",
      "지정한 클래스들에 대한 클래스 다이어그램을 생성합니다.",
    ],
    details: {
      team: { title: "팀 구성", items: ["개인"] },
      period: { title: "개발 기간", items: ["1개월 (2024.10 ~ 2024.11)"] },
      responsibility: {
        title: "담당 업무",
        items: [
          "UML Generator를 이용한 페이지 구성",
          "PlantUML 라이브러리를 활용한 포맷 변환 기능",
          "빌드 결과를 다른 패키지에 주입하여 annotation 기반 클래스 다이어그램 생성",
        ],
      },
      stack: {
        title: "사용 기술 스택",
        items: ["React, PlantUML, Spring Boot, Java, REST API"],
      },
    },
    images: [{ src: UmlGenerator, alt: "UML Generator" }],
  },
];
