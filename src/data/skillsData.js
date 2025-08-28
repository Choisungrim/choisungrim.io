// src/data/skillsData.js

export const skillActions = [
  { label: "돌아가기", to: "/" },
  { label: "상세 경력 보기", to: "/loading/resumeCareer" },
  { label: "상세 포폴 보기", to: "/loading/resumePortfolio" },
];

export const skillCategories = [
  {
    id: "lang",
    title: "프로그래밍 언어",
    items: [
      {
        name: "Python",
        desc: "데이터 처리, 서버 로직, PLC 연동, 로봇 작업관리 구축.",
      },
      {
        name: "Java",
        desc: "로봇 관제/작업관리. Python → Spring 포팅으로 자사 솔루션화.",
      },
      {
        name: "JavaScript",
        desc: "동적 UI, 비동기 처리 기반 인터페이스 구현.",
      },
      {
        name: "TypeScript",
        desc: "REST API 설계/구현, ELK+Redis 연동, 공용 타입 유지.",
      },
    ],
  },
  {
    id: "frameworks",
    title: "프레임워크 및 라이브러리",
    items: [
      {
        name: "Spring Boot",
        desc: "REST API. Warehouse Kitting Robot Solution 구축.",
      },
      { name: "JPA", desc: "ORM로 복잡 모델 관리, 재고/경로 시스템 적용." },
      {
        name: "Spring Framework",
        desc: "FMS 통합, 로봇 통신/프로세스 가시화.",
      },
      { name: "MyBatis", desc: "DB 접근/ORM, 관제·작업관리 성능 최적화." },
      { name: "Node.js", desc: "비동기 기반 로봇 관리 API." },
      { name: "Camunda", desc: "업무 프로세스 최적화, 노코드 제어 플로우." },
      {
        name: "NestJS",
        desc: "모듈화, 타입 공유, 세션 검증·글로벌 예외 처리.",
      },
    ],
  },
  {
    id: "db",
    title: "데이터베이스",
    items: [
      { name: "PostgreSQL", desc: "FMS 성능 최적화." },
      { name: "Oracle", desc: "Warehouse Kitting 기준정보 모델링." },
      { name: "MariaDB", desc: "FMS 성능 개선." },
      { name: "Redis", desc: "세션 스토어로 인증/세션 안정화." },
      { name: "ELK 스택", desc: "로그 수집/분석/시각화." },
    ],
  },
  {
    id: "comm",
    title: "통신 프로토콜 및 메시징",
    items: [
      { name: "MQTT", desc: "실시간 제어/상태 수집." },
      { name: "TCP Socket", desc: "설비 연계 실시간 송수신." },
      { name: "RabbitMQ", desc: "이벤트 기반 아키텍처로 응답성 향상." },
      { name: "OPC UA", desc: "설비 인터페이스 단일화." },
    ],
  },
  {
    id: "tools",
    title: "도구 및 기술",
    items: [
      { name: "Docker", desc: "컨테이너 배포 자동화, compose 세팅." },
      { name: "SonarQube", desc: "정적 분석으로 코드 품질 개선." },
    ],
  },
];
