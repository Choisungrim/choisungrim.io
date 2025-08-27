import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/resumeCareer.css"; // 스타일 파일을 별도로 관리
import ParkerImage from "./resource/parker.jpg";
import ParkerLayoutImage from "./resource/parker_layout.png";
import AmoreImage from "./resource/amore.jpg";
import AmoreFms from "./resource/amore_fms.jpg";
import Samjin from "./resource/samjin.jpg";
import FmsMain from "./resource/fmsMain.jpg";
import Camunda from "./resource/camunda.png";
import Thermofisher from "./resource/thermofisher.png";
import Shinsung from "./resource/shinsung.jpg";
import Cjproject from "./resource/cjproject.png";
import Disher from "./resource/disher.jpg";
import Hyundai from "./resource/hyundai.jpg";
import Minefluencer from "./resource/minefluencer.png";
import RoadMap from "./resource/roadmap.png";
import axbisLogin from "./resource/axbis_login.png";
import axbisMonitor from "./resource/axbis_monitoring.png";

const ResumeCareer = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const imagesWithDescriptions = {
    ParkerImage: {
      description:
        "P사 FMS 시스템 구축: AMR 제어 솔루션 개발\n " +
        "사용 기술: Python, TCP Socket, MQTT, PostgreSQL.\n" +
        "성과: AMR 통신 최적화 및 실시간 모니터링 개선,\n" +
        "회전 오류 발생률 30% 감소.",
      src: ParkerImage,
    },
    ParkerLayoutImage: {
      description: "경로 모니터링 UI 개발",
      src: ParkerLayoutImage,
    },
    AmoreImage: {
      description: "UR, Conveyor등 이기종 제어 개발",
      src: AmoreImage,
    },
    AmoreFms: {
      description:
        "A사 FMS 시스템 구축: PLC신호 제어 솔루션 개발\n" +
        "사용 기술: Python, OPC_UA(Milo), MQTT, PostgreSQL \n" +
        "성과: 로봇 별 작업 최적화 및 충전 기준 정의 설계 및 구현 \n" +
        "구간 별 병목현상 제어 최적화",
      src: AmoreFms,
    },
    Samjin: {
      description:
        "G사 POC: 물류 창고 키팅 솔루션 개발 \n" +
        "사용 기술: SpringBoot, Java, Oracle, RabbitMQ, MQTT, Python, PostgreSQL \n" +
        "성과: 로봇을 이용한 물류 키팅 가능성 제시 \n" +
        "보충, 키팅, 검수 등의 프로세스를 로봇을 통해 자동화",
      src: Samjin,
    },
    FmsMain: {
      description:
        "FMS Version Upgrade \n" +
        "사용 기술: Spring FrameWork, Java, MariaDB, RabbitMQ, MQTT, Camunda\n" +
        "성과: UI/UX개선 및 인터페이스 설계 및 구현,\n" +
        "사용자가 비 코딩을 통해 업무 프로세스를 구현하여 사용할 수 있도록\n" +
        "ProcessAPI를 설계 및 구현",
      src: FmsMain,
    },
    Camunda: {
      description:
        "Business Process Modeling Notation을 통해\n" +
        "사용자가 설계하여 코드를 추가할 필요 없이 시스템에 동작하는\n" +
        "API를 연결하여 이를 통해, 반송 및 충전등의 시나리오를 수행, \n" +
        "유지보수 및 변경사항에 대해 유동적인 대처 가능",
      src: Camunda,
    },
    Thermofisher: {
      description:
        "T사 FMS 시스템 구축: 트래픽 관리, 제어 시스템 개발 및 리포트 고도화\n" +
        "사용 기술: Spring FrameWork, Java, MariaDB, RabbitMQ, MQTT, Camunda, OPC_UA\n" +
        "성과: PLC 제어를 통한 Speed Door 제어 안정성 확보\n" +
        "현장상황에 맞게 프로세스를 설계 및 구현 회수 시나리오, 진행 중 대기 시나리오 구현,\n" +
        "리포트 고도화 및 반송에 대한 구간별 상세 리포트 구현",
      src: Thermofisher,
    },
    Shinsung: {
      description: "신성 이미지 설명",
      src: Shinsung,
    },
    Cjproject: {
      description: "CJ 프로젝트 이미지 설명",
      src: Cjproject,
    },
    Disher: {
      description: "디셔 이미지 설명",
      src: Disher,
    },
    Hyundai: {
      description: "현대 이미지 설명",
      src: Hyundai,
    },
    Minefluencer: {
      description: "마인플루언서 이미지 설명",
      src: Minefluencer,
    },
    RoadMap: {
      description: "이력서 이미지 설명",
      src: RoadMap,
    },
    axbisLogin: {
      description: "액스비스 ACS 통합 관제 시스템 로그인\n",
      src: axbisLogin,
    },
    axbisMonitor: {
      description: "액스비스 ACS 통합 관제 시스템 모니터링 화면",
      src: axbisMonitor,
    },
  };

  useEffect(() => {
    document.title = "portfolio"; // 문서 제목 설정
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 맨 위로 이동
  }, []);

  const handleMouseEnter = (image) => {
    for (const key in imagesWithDescriptions) {
      if (imagesWithDescriptions[key].src === image) {
        setImageDescription(imagesWithDescriptions[key].description);
        break;
      }
    }
  };

  const handleMouseLeave = () => {
    setImageDescription();
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const openModal = (imageSrc) => {
    const selectedImage = imagesWithDescriptions[imageSrc];
    setIsModalOpen(true);
    setSelectedImage(selectedImage.src);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
    setImageDescription();
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="button-container_resume">
        <button
          className="chatbot-button_resume"
          onClick={() => handleNavigate("/")}
        >
          돌아가기
        </button>
        <button
          className="chatbot-button_resume"
          onClick={() => handleNavigate("/loading/resumeSkill")}
        >
          상세 기술 보기
        </button>
        <button
          className="chatbot-button_resume"
          onClick={() => handleNavigate("/loading/resumePortfolio")}
        >
          상세 포폴 보기
        </button>
      </div>
      <div className="resume-container">
        <h1 className="resume-title">경력 상세 내용</h1>

        <section className="resume-section">
          <div>
            <img
              src={RoadMap}
              alt="RoadMap"
              className="roadmap-image"
              onClick={() => openModal("RoadMap")}
            />
          </div>
          <h2>경력 상세 내용</h2>
          <div>
            <li className="highlight">
              <strong>(주) 액스비스</strong> - 로보틱스그룹 (2024.12 ~ 재직 중)
              <ol>
                <li className="flex-container">
                  <div className="text-content">
                    <strong>ACS 통합 관제 시스템 설계 및 백엔드 구축</strong>
                    <p>(2024.12 ~ 진행 중)</p>

                    <p>
                      주요 업무: ACS 아키텍처와 웹 아키텍처 설계, 기준정보 및
                      공통 모듈 개발, Map Editor 설계,존 기반 트래픽 제어 로직
                      개발, 역할 기반 메뉴·권한 관리, 작업 자동화 프로세스 및
                      할당 구현
                    </p>

                    <p>
                      사용 기술: React, NestJS, Spring Boot, Java, MariaDB,
                      MQTT, Redis, Elasticsearch, Logstash, Kibana
                    </p>

                    <p>프로젝트 성과</p>
                    <ul>
                      <li>
                        React, NestJS, Spring Boot 조합으로 신규 ACS 아키텍처를
                        설계하고 WBS, 기능명세서, ERD, 화면설계서, 인터페이스
                        정의서, 클래스 다이어그램 등 산출물을 표준화
                      </li>
                      <li>
                        Map Editor와 제조사별 템플릿·글로벌 템플릿을 정의해 다수
                        로봇과 제조사 간 호환성을 확보 (VDA5050 연계 기반)
                      </li>
                      <li>
                        존 단위 점유와 경로 계획에 기반한 트래픽 제어를 구현하여
                        교차 구간 병목과 충돌 위험 최소화
                      </li>
                      <li>
                        사용자 정보 기반 RBAC와 메뉴 관리를 개발해 운영자별 접근
                        제어와 보안을 강화
                      </li>
                      <li>
                        MQTT 비동기 통신을 도입해 AMR 상태와 작업 데이터의
                        실시간 정합성을 확보
                      </li>
                      <li>
                        Redis 세션·캐시와 Elasticsearch–Kibana 연계를 통해
                        모니터링과 응답 속도를 개선
                      </li>
                      <li>
                        작업 자동화 프로세스를 설계·구현하여 작업 할당과 피드백
                        처리 효율을 향상
                      </li>
                    </ul>
                  </div>

                  <div className="image-container">
                    <img
                      src={axbisLogin}
                      alt="ACS 로그인 화면"
                      className="inline-image"
                      onClick={() => openModal("axbisLogin")}
                    />
                    <img
                      src={axbisMonitor}
                      alt="ACS 모니터링 화면"
                      className="inline-image"
                      onClick={() => openModal("axbisMonitor")}
                    />
                    <p>출처: 액스비스 로보틱스그룹 소개서</p>
                  </div>
                </li>
              </ol>
            </li>

            <li className="highlight">
              <strong>(주)티라로보틱스</strong> - 솔루션 개발팀 (2022.07 -
              2024.07)
              <ol>
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>P사 현장 납품 프로젝트</strong>
                      <p>(2022.07 ~ 2022.09)</p>
                      <p>
                        주요 업무: AMR 연동 시스템 및 UI 개발, 네트워크 망 구축
                      </p>
                      <p>사용 기술: Python, TCP Socket, MQTT, PostgreSQL</p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>
                          AMR과의 원활한 통신을 위해 TCP Socket 및 MQTT
                          프로토콜을 활용하여 데이터 전송 및 수신을 위한 Client
                          개발
                        </li>
                        <li>
                          UI에서의 피드백을 통해 실시간 모니터링을 최적화하여
                          표시 및 정확한 위치 파악
                        </li>
                        <li>
                          AMR의 위치에 따른 회전 문제를 특정 구간에서 회전을
                          못하도록 제어하여 회전 오류 발생률을 30% 감소시킴
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={ParkerImage}
                      alt="parker"
                      className="inline-image"
                      onClick={() => openModal("ParkerImage")}
                    />
                    <img
                      src={ParkerLayoutImage}
                      alt="parker_layout"
                      className="inline-image"
                      onClick={() => openModal("ParkerLayoutImage")}
                    />
                    <p>출처 : 티라로보틱스 유튜브 </p>
                  </div>
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>A사 현장 납품 프로젝트</strong> (2022.08 ~
                      2022.10)
                      <p>주요 업무: PLC 신호 통신 및 트래픽 제어 구축</p>
                      <p>사용 기술: Python, PLC, MQTT, PostgreSQL</p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>PLC 신호 통신을 최적화하여 작업의 효율성을 높임</li>
                        <li>
                          대기 시간에 따른 자동 충전 및 대기위치 이동 개발 및
                          process 설계
                        </li>
                        <li>
                          구간 별 병목현상 제어 최적화를 통한 트래픽 제어하여
                          작업의 효율성이 2배이상 향상 (작업설비 증가)
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={AmoreFms}
                      alt="amore_fms"
                      className="inline-image"
                      onClick={() => openModal("AmoreFms")}
                    />
                    <img
                      src={AmoreImage}
                      alt="amore"
                      className="inline-image"
                      onClick={() => openModal("AmoreImage")}
                    />
                    <p>출처 : 티라로보틱스 유튜브 </p>
                  </div>
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>G사 물류창고 로봇 자동화 솔루션 POC</strong>{" "}
                      (2022.11 ~ 2023.03)
                      <p>
                        주요 업무: WRS 솔루션 개발 및 로봇 메시징 프로토콜 구현
                      </p>
                      <p>
                        사용 기술: Spring Boot, JPA, Mybatis, Oracle, MQTT,
                        Java, JavaScript, RabbitMQ, Erlang
                      </p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>
                          WRS 솔루션의 메시징 프로토콜 개선으로 로봇 간 효율적인
                          데이터 전송 보장
                        </li>
                        <li>
                          오더관리, 재고관리, 화주사, 물품, 랙 위치 로봇 매핑,
                          존 관리, 담당자 관리, 주행 정책 등 기준정보 관리 기능
                          개발
                        </li>
                        <li>
                          자동화된 피킹 프로세스를 통해 물류 현장 작업 속도 30%
                          향상 (실제 Picking time 15분 이상소요 -> 10분 소요)
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={Samjin}
                      alt="Samjin"
                      className="inline-image_one"
                      onClick={() => openModal("Samjin")}
                    />
                    <p>출처 : 다음 MBN </p>
                  </div>
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>
                        FMS(Fleet Management System) Version Upgrade
                      </strong>{" "}
                      (2023.01 ~ 2023.07)
                      <p>주요 업무: FMS 솔루션 개발 및 로봇 간 트래픽 제어</p>
                      <p>
                        사용 기술: Spring Framework, Mybatis, MariaDB, Java,
                        JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, TCP Socket,
                        Camunda
                      </p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>
                          사용자 피드백을 반영한 UI/UX 개선 작업을 통해 직관적인
                          인터페이스 구현
                        </li>
                        <li>
                          기존 python, PostgreSQL로 구현한 시스템을 Spring,
                          MariaDB로 마이그레이션 및 포팅
                        </li>
                        <li>
                          사용자가 비 코딩으로 업무 프로세스를 구현하여 로봇이
                          작동되게 외부 Process API를 Embedded 설계 및 구현
                        </li>
                        <li>
                          라이센스 구매비용 절감, 자사솔루션을 통한 프로젝트
                          진행으로 비즈니스적 성과 도출
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={FmsMain}
                      alt="fmsMain"
                      className="inline-image"
                      onClick={() => openModal("FmsMain")}
                    />
                    <img
                      src={Camunda}
                      alt="camunda"
                      className="inline-image"
                      onClick={() => openModal("Camunda")}
                    />
                    <p>
                      출처 : 로봇 자동화 협력 플랫폼, Camunda 공식 홈페이지{" "}
                    </p>
                  </div>
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>T사 현장 납품 프로젝트</strong> (2023.09 ~
                      2023.11)
                      <p>주요 업무: 트래픽 제어 및 PLC 제어 개발</p>
                      <p>
                        사용 기술: Spring Framework, Mybatis, MariaDB, Java,
                        JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, TCP Socket,
                        Camunda
                      </p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>
                          PLC 제어 시스템을 설계 및 구현하여 로봇움직임에
                          스피드도어 제어, 트래픽 관리의 정확도를 높임
                        </li>
                        <li>
                          데이터 분석을 통해 예측 가능한 트래픽 흐름 구현
                          (구간에 따른 대기위치 구현)
                        </li>
                        <li>
                          리포트를 세분화 하고 구간별 시간의 파악을 통해 정확한
                          데이터 분석 쿼리 튜닝
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={Thermofisher}
                      alt="Thermofisher"
                      className="inline-image_one"
                      onClick={() => openModal("Thermofisher")}
                    />
                    <p>출처 : 에이빙 뉴스 </p>
                  </div>
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>S사 대리점 개발 지원</strong> (2023.11 ~ 2024.01)
                      <p>주요 업무: 외부 API 개발 및 서비스 모듈화</p>
                      <p>
                        사용 기술: Spring Framework, Mybatis, MariaDB, Java,
                        JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, TCP Socket,
                        Camunda
                      </p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>
                          외부 API 통합을 위한 표준화된 인터페이스 설계로 데이터
                          흐름의 일관성 확보
                        </li>
                        <li>
                          서비스 모듈화를 통해 각 기능의 독립성을 강화하여
                          유지보수 용이성 증대
                        </li>
                        <li>
                          API 성능 모니터링을 통해 병목 현상을 사전에 식별하고
                          최적화 작업 수행
                        </li>
                      </ul>
                    </li>
                  </div>
                  {/* <div className="image-container">
                                    <img src={Shinsung} alt="Shinsung" className="inline-image_one" onClick={() => openModal('Shinsung')} />
                                    <p>출처 : </p>
                                </div> */}
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>C사 현장 납품 프로젝트</strong> (2024.02 ~
                      2024.03)
                      <p>주요 업무: 배포버전 개발 및 오더 관리</p>
                      <p>
                        사용 기술: Spring Framework, Mybatis, MariaDB, Java,
                        JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, Camunda
                      </p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>
                          작업 단위 소분, 오더 관리 시스템을 설계하여 프로세스
                          효율성 향상
                        </li>
                        <li>설비와의 PLC 통신을 통해 작업의 안정성 향상</li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={Cjproject}
                      alt="Cjproject"
                      className="inline-image_one"
                      onClick={() => openModal("Cjproject")}
                    />
                    <p>출처 : Thirarobotics Linked in </p>
                  </div>
                </li>
                <br />
                <li className="flex-container">
                  <div className="text-content">
                    <li>
                      <strong>H사 현장 납품 프로젝트</strong> (2024.06 ~
                      2024.07)
                      <p>
                        주요 업무: 시나리오 통합 관리 및 차량 순회 로직 개발
                      </p>
                      <p>
                        사용 기술: Spring Framework, Mybatis, MariaDB, Java,
                        JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, Camunda
                      </p>
                      <strong>프로젝트 성과</strong>
                      <ul>
                        <li>단일 경로에서 차량을 순회시키기 위한 로직 개발</li>
                        <li>
                          절전 모드 기능을 개발하여 로봇 보드 통신, 에너지 소비
                          절감 서비스 구현
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="image-container">
                    <img
                      src={Hyundai}
                      alt="Hyundai"
                      className="inline-image_one"
                      onClick={() => openModal("Hyundai")}
                    />
                    <p>출처 : TheGuru Global뉴스 </p>
                  </div>
                </li>
              </ol>
            </li>

            <li className="highlight">
              <strong>(주)시스게이트</strong> - 생명운영과 사원 (2019.09 ~
              2021.08)
              <div className="text-content">
                <ul>
                  <p>
                    주요 업무: 인프라 운영 및 유지보수, 이벤트 뷰어를 통한
                    시스템 및 애플리케이션 모니터링, 백업 관리
                  </p>
                  <p>
                    직무 성과: 시스템 모니터링 도구를 활용하여 인프라의 안정성을
                    높힘, 정기적인 백업 관리로 데이터 손실을 예방
                  </p>
                </ul>
              </div>
            </li>
          </div>
        </section>

        <section className="resume-section">
          <h2>자격증</h2>
          <div className="highlight">
            <p>2021.12 - SQLDeveloper - 한국데이터산업진흥원</p>
            <p>2021.11 - 정보처리기사 - 한국산업인력공단</p>
            <p>2020.06 - MOS - Microsoft</p>
            <p>2016.11 - 네트워크관리사 2급 - 한국정보통신자격협회</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>블로그 주소</h2>
          <div className="highlight">
            <a
              href="https://70658277.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              블로그 바로가기
            </a>
          </div>
          <h2>GitHub 주소</h2>
          <div className="highlight">
            <a
              href="https://github.com/Choisungrim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub 바로가기
            </a>
          </div>
        </section>

        <section className="resume-section">
          <h2>자기소개서</h2>
          <div className="highlight">
            <p>
              안녕하세요, 서버 개발자 최성림입니다. Java와 Spring 기반 웹 개발을
              시작으로 백엔드 역량을 쌓아왔으며, 새로운 기술을 빠르게 습득하고
              실무에 적용하는 강점을 보유하고 있습니다.
            </p>

            <p>
              티라로보틱스에서는 AMR 관제 시스템(FMS) 솔루션 개발을 맡아 API
              설계, 외부 연동, DB 모델링과 쿼리 튜닝을 수행했습니다. Camunda를
              도입해 복잡한 로봇 제어 시나리오를 자동화했고, Python 기반 로직을
              Spring으로 포팅하며 서비스 구조를 정비했습니다. MQTT·RabbitMQ 기반
              실시간 통신 안정화로 현장 요구를 빠르게 반영했습니다.
            </p>

            <p>
              또한, 물류 도메인 경험도 있습니다. G사 물류창고 자동화 POC에서는
              Spring Boot, Oracle, MQTT, RabbitMQ를 활용해 피킹 프로세스와
              메시징 프로토콜을 구현, 작업 속도를 약 30% 개선하였으며,
              오더·재고·화주사·랙 매핑·존 관리 등 핵심 기능을 개발하며 물류
              시스템 구조와 운영을 이해했습니다.
            </p>

            <p>
              최근에는 액스비스에서 ACS 시스템을 설계하며 NestJS 기반 백엔드와
              MariaDB·TypeORM 데이터 설계를 수행했습니다. Redis 세션 스토어와
              역할 기반 접근 제어를 구현해 성능과 안정성을 확보했고, ELK 스택을
              도입해 로그 관리와 모니터링 체계를 고도화하였으며, spring boot
              기반 솔루션을 개발하며, 로봇과의 통신 및 설비 인터페이스를 이벤트
              드리븐 형식으로 구현하여 각 장비별 관리를 용이하게 할 수 있도록
              설계 구현하였습니다.
            </p>

            <p>
              저의 강점은 새로운 기술을 빠르게 습득하고 실무에 적용하는 것
              입니다. FMS에 Camunda 오픈소스를 도입해 시나리오를
              자동화·시각화했으며, 아키텍처·API·DB·인터페이스 문서를 직접 작성해
              협업 표준을 마련했습니다.
            </p>

            <p>
              청각장애가 있는 부모님 밑에서 자라며 배운 책임감과 끈기를
              바탕으로, 저는 특정 도메인에 한정되지 않고 다양한 환경에서
              안정적이고 확장 가능한 백엔드 서비스를 구축하는 개발자로
              성장하겠습니다.
            </p>
          </div>
        </section>
      </div>
      {/* 모달 */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="imagebox"
            onClick={closeModal}
            onMouseEnter={() => handleMouseEnter(selectedImage)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="close" onClick={closeModal}>
              &times;
            </div>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            {imageDescription && (
              <div
                className="content"
                onMouseEnter={() => handleMouseEnter(selectedImage)}
                style={{ whiteSpace: "pre-line" }}
              >
                {imageDescription}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="button-container_resume">
        <button
          className="chatbot-button_resume"
          onClick={() => handleNavigate("/")}
        >
          돌아가기
        </button>
        <button
          className="chatbot-button_resume"
          onClick={() => handleNavigate("/loading/resumeSkill")}
        >
          상세 기술 보기
        </button>
        <button
          className="chatbot-button_resume"
          onClick={() => handleNavigate("/loading/resumePortfolio")}
        >
          상세 포폴 보기
        </button>
      </div>
    </div>
  );
};

export default ResumeCareer;
