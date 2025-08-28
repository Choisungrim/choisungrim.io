// src/data/careerData.js
import ParkerImage from "../resource/parker.jpg";
import ParkerLayoutImage from "../resource/parker_layout.png";
import AmoreImage from "../resource/amore.jpg";
import AmoreFms from "../resource/amore_fms.jpg";
import Samjin from "../resource/samjin.jpg";
import FmsMain from "../resource/fmsMain.jpg";
import Camunda from "../resource/camunda.png";
import Thermofisher from "../resource/thermofisher.png";
import Cjproject from "../resource/cjproject.png";
import Hyundai from "../resource/hyundai.jpg";
import RoadMap from "../resource/roadmap.png";
import axbisLogin from "../resource/axbis_login.png";
import axbisMonitor from "../resource/axbis_monitoring.png";

export const careerActions = [
  { label: "돌아가기", to: "/" },
  { label: "상세 기술 보기", to: "/loading/resumeSkill" },
  { label: "상세 포폴 보기", to: "/loading/resumePortfolio" },
];

export const roadmap = {
  id: "roadmap",
  title: "경력 로드맵",
  image: { src: RoadMap, alt: "RoadMap" },
};

export const careers = [
  {
    id: "axbis",
    company: "(주) 액스비스",
    role: "로보틱스그룹",
    period: "2024.12 ~ 재직 중",
    projects: [
      {
        title: "ACS 통합 관제 시스템 설계 및 백엔드 구축",
        period: "2024.12 ~ 진행 중",
        summary: [
          "ACS 아키텍처와 웹 아키텍처 설계, 기준정보 및 공통 모듈 개발, Map Editor 설계,존 기반 트래픽 제어 로직 개발, 역할 기반 메뉴·권한 관리, 작업 자동화 프로세스 및 할당 구현",
          "기술 스택 : React, NestJS, Spring Boot, MariaDB, MQTT, Redis, ELK",
        ],
        achievements: [
          "신규 ACS 아키텍처 및 산출물 표준화(WBS/기능명세서/화면설계서/ERD/인터페이스/클래스다이어그램)",
          "VDA5050 기반 제조사 템플릿으로 로봇 호환성 확보",
          "존 점유/경로계획 기반 트래픽 제어로 병목·충돌 최소화",
          "계정별 역할관리·메뉴관리로 운영자별 접근제어 강화",
          "MQTT 비동기 통신으로 상태/작업 실시간 정합성 확보",
          "Redis·ELK 연동으로 모니터링/응답성 개선",
        ],
        images: [
          {
            src: axbisLogin,
            alt: "ACS 로그인 화면",
          },
          {
            src: axbisMonitor,
            alt: "ACS 모니터링 화면",
            credit: "액스비스 로보틱스그룹 소개서",
          },
        ],
      },
    ],
  },
  {
    id: "thira",
    company: "(주)티라로보틱스",
    role: "솔루션 개발팀",
    period: "2022.07 ~ 2024.07",
    projects: [
      {
        title: "P사 현장 납품 프로젝트",
        period: "2022.07 ~ 2022.09",
        summary: [
          "AMR 연동 및 UI 개발, 네트워크 망 구축",
          "기술 스택 : Python, TCP Socket, MQTT, PostgreSQL",
        ],
        achievements: [
          "TCP/MQTT 클라이언트 구현으로 통신 안정화",
          "UI 피드백 기반 실시간 모니터링 최적화",
          "특정 구간 회전 제한으로 회전 오류 30% 감소",
        ],
        images: [
          { src: ParkerImage, alt: "parker" },
          {
            src: ParkerLayoutImage,
            alt: "parker_layout",
            credit: "티라로보틱스 유튜브",
          },
        ],
      },
      {
        title: "A사 현장 납품 프로젝트",
        period: "2022.08 ~ 2022.10",
        summary: [
          "PLC 신호 통신 및 트래픽 제어",
          "기술 스택 : Python, PLC(OPC UA), MQTT, PostgreSQL",
        ],
        achievements: [
          "PLC 통신 최적화로 작업 효율 향상",
          "대기시간 기반 자동 충전/대기위치 이동",
          "구간 별 병목현상 제어를 위해 구간 점유를 통한 작업 효율성 증대",
        ],
        images: [
          { src: AmoreFms, alt: "amore_fms" },
          { src: AmoreImage, alt: "amore", credit: "티라로보틱스 유튜브" },
        ],
      },
      {
        title: "G사 물류창고 로봇 자동화 POC",
        period: "2022.11 ~ 2023.03",
        summary: [
          "WRS 솔루션 개발 및 로봇 메시징 프로토콜",
          "기술 스택 : Spring Boot, JPA, MyBatis, Oracle, MQTT, RabbitMQ",
        ],
        achievements: [
          "메시징 개선으로 로봇 간 전송 효율↑",
          "오더/재고/화주/물품/랙 매핑/존/담당자/주행 정책 등 기준정보 개발",
          "자동화 피킹으로 작업 속도 ~30% 향상 (실제 Picking time 15분 이상소요 -> 10분 소요)",
        ],
        images: [{ src: Samjin, alt: "Samjin", credit: "다음 MBN" }],
      },
      {
        title: "FMS(Fleet Management System) Version Upgrade",
        period: "2023.01 ~ 2023.07",
        summary: [
          "FMS 솔루션·트래픽 제어",
          "기술 스택: Spring, MyBatis, MariaDB, RabbitMQ, MQTT, OPC UA, Camunda",
        ],
        achievements: [
          "UI/UX 개선 및 직관적 인터페이스",
          "Python/PostgreSQL → Spring/MariaDB 마이그레이션",
          "외부 Process API 임베딩으로 노코드 시나리오 구현",
          "라이선스 비용 절감 및 자사솔루션 전환",
        ],
        images: [
          { src: FmsMain, alt: "FMS 메인", credit: "로봇 자동화 협력 플랫폼" },
          { src: Camunda, alt: "Camunda", credit: "Camunda 공식" },
        ],
      },
      {
        title: "T사 현장 납품 프로젝트",
        period: "2023.09 ~ 2023.11",
        summary: [
          "트래픽 제어 및 PLC 제어",
          "기술 스택 : Spring, MyBatis, MariaDB, RabbitMQ, MQTT, OPC UA, Camunda",
        ],
        achievements: [
          "PLC 연동으로 스피드도어 제어·정확도 강화",
          "병목 대기위치 설계로 예측 가능한 트래픽 흐름",
          "리포트 세분화로 구간별 작업 쿼리 튜닝/분석 고도화",
        ],
        images: [
          { src: Thermofisher, alt: "Thermofisher", credit: "에이빙 뉴스" },
        ],
      },
      {
        title: "S사 대리점 개발 지원",
        period: "2023.11 ~ 2024.01",
        summary: [
          "외부 API 개발 및 서비스 모듈화",
          "기술 스택 : Spring, MyBatis, MariaDB, RabbitMQ, MQTT, OPC UA, Camunda",
        ],
        achievements: [
          "인터페이스 표준화 설계로 데이터 일관성",
          "서비스 모듈화로 유지보수성 향상",
        ],
      },
      {
        title: "C사 현장 납품 프로젝트",
        period: "2024.02 ~ 2024.03",
        summary: [
          "배포버전 개발 및 오더 관리",
          "기술 스택 : Spring, MyBatis, MariaDB, RabbitMQ, MQTT, OPC UA, Camunda",
        ],
        achievements: [
          "작업 소분/오더 관리로 프로세스 효율↑",
          "PLC 통신으로 작업 안정성 향상",
        ],
        images: [
          {
            src: Cjproject,
            alt: "Cjproject",
            credit: "Thirarobotics LinkedIn",
          },
        ],
      },
      {
        title: "H사 현장 납품 프로젝트",
        period: "2024.06 ~ 2024.07",
        summary: [
          "시나리오 통합 및 차량 순회 로직",
          "기술 스택 : Spring, MyBatis, MariaDB, RabbitMQ, MQTT, OPC UA, Camunda",
        ],
        achievements: [
          "단일 경로 차량 순회 로직",
          "절전모드로 로봇보드 통신/에너지 절감",
        ],
        images: [
          { src: Hyundai, alt: "Hyundai", credit: "TheGuru Global뉴스" },
        ],
      },
    ],
  },
  {
    id: "sysgate",
    company: "(주)시스게이트",
    role: "생명운영과 사원",
    period: "2019.09 ~ 2021.08",
    summaryOnly: [
      "인프라 운영/유지보수, 이벤트 뷰어 모니터링, 백업 관리",
      "모니터링 고도화로 안정성 향상, 정기 백업으로 데이터 손실 예방",
    ],
  },
];

export const licenses = [
  "2021.12 - SQLDeveloper - 한국데이터산업진흥원",
  "2021.11 - 정보처리기사 - 한국산업인력공단",
  "2020.06 - MOS - Microsoft",
  "2016.11 - 네트워크관리사 2급 - 한국정보통신자격협회",
];

export const links = [
  { label: "블로그 바로가기", href: "https://70658277.tistory.com/" },
  { label: "GitHub 바로가기", href: "https://github.com/Choisungrim/" },
];

export const introParagraphs = [
  "안녕하세요, 저는 최성림입니다. Java와 Spring 기반 웹 개발을 시작으로 백엔드 역량을 쌓아왔으며, 새로운 기술을 빠르게 습득하고 실무에 적용하는 강점을 보유하고 있습니다.",
  "티라로보틱스에서는 AMR 관제 시스템(FMS) 솔루션 개발을 맡아 API 설계, 외부 연동, DB 모델링과 쿼리 튜닝을 수행했습니다. Camunda를 도입해 복잡한 로봇 제어 시나리오를 자동화했고, Python 기반 로직을" +
    "Spring으로 포팅하며 서비스 구조를 정비했습니다. MQTT·RabbitMQ 기반" +
    "실시간 통신 안정화로 현장 요구를 빠르게 반영했습니다.",
  "또한, 물류 도메인 경험도 있습니다. G사 물류창고 자동화 POC에서는" +
    "Spring Boot, Oracle, MQTT, RabbitMQ를 활용해 피킹 프로세스와" +
    "메시징 프로토콜을 구현, 작업 속도를 약 30% 개선하였으며," +
    "오더·재고·화주사·랙 매핑·존 관리 등 핵심 기능을 개발하며 물류" +
    "시스템 구조와 운영을 이해했습니다.",
  "최근에는 액스비스에서 ACS 시스템을 설계하며 NestJS 기반 백엔드와" +
    "MariaDB·TypeORM 데이터 설계를 수행했습니다. Redis 세션 스토어와" +
    "역할 기반 접근 제어를 구현해 성능과 안정성을 확보했고, ELK 스택을" +
    "도입해 로그 관리와 모니터링 체계를 고도화하였으며, spring boot" +
    "기반 솔루션을 개발하며, 로봇과의 통신 및 설비 인터페이스를 이벤트" +
    "드리븐 형식으로 구현하여 각 장비별 관리를 용이하게 할 수 있도록" +
    "설계 구현하였습니다.",
  "저의 강점은 새로운 기술을 빠르게 습득하고 실무에 적용하는 것" +
    "입니다. FMS에 Camunda 오픈소스를 도입해 시나리오를" +
    "자동화·시각화했으며, 아키텍처·API·DB·인터페이스 문서를 직접 작성해" +
    "협업 표준을 마련했습니다.",
  "청각장애가 있는 부모님 밑에서 자라며 배운 책임감과 끈기를" +
    "바탕으로, 저는 특정 도메인에 한정되지 않고 다양한 환경에서" +
    "안정적이고 확장 가능한 백엔드 서비스를 구축하는 개발자로 성장하겠습니다.",
];
