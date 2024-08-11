import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/resumeCareer.css'; // 스타일 파일을 별도로 관리

const ResumeCareer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'portfolio'; // 문서 제목 설정
        window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 맨 위로 이동
    }, []);
    
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className="button-container_resume">
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/')}>돌아가기</button>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/loading/resumeCareer')}>상세 경력 보기</button>
            </div>
            <div className="resume-container">
                <h1 className="resume-title">기술 상세 내용</h1>

                <section className="resume-section">
                    <h2>개인 정보</h2>
                    <div className="highlight">
                        <p>이름: 최성림</p>
                        <p>나이: 29세</p>
                        <p>연락처: 010-7742-1587</p>
                        <p>이메일: wowilos@naver.com</p>
                    </div>
                </section>

                <section className="resume-section">
                    <h2>기술 상세 내용</h2>
                    <div>
                        <li className="highlight">
                            <strong>프로그래밍 언어</strong>
                            <ol>
                                <li>
                                    <strong>Python</strong>
                                    <p> - 데이터 처리 및 서버 사이드 로직 구현 경험이 있으며, <strong>로봇 납품 프로젝트</strong>에서는 각 로봇별 작업 관리, 할당, 피드백 관리 및 PLC 프로토콜 연동을 통해 효율적인 작업 흐름을 구축하였음.</p>
                                </li>
                                <li>
                                    <strong>Java</strong>
                                    <p> - 애플리케이션 개발 및 서버 사이드 프로그래밍에 대한 이해를 바탕으로 <strong>로봇 관제 및 작업 관리</strong> 시스템을 개발하였으며, <br />기존 Python 시스템을 Java 기반의 Spring Framework로 포팅하여 성능을 개선하였음.</p>
                                </li>
                                <li>
                                    <strong>JavaScript</strong>    
                                    <p> - 프론트엔드 개발 및 사용자 인터페이스 구현 경험이 있으며, jQuery를 활용하여 동적인 웹 페이지를 제작하였고, 기본적인 비동기 처리 이해를 바탕으로 인터페이스를 구현하였음.</p>
                                </li>
                            </ol>
                        </li>
                        <li className="highlight">
                            <strong>프레임워크 및 라이브러리</strong>
                            <ol>
                                <li>
                                    <strong>Spring Boot</strong>
                                    <p> - RESTful API 개발 경험이 있으며, <strong>Warehouse Kitting Robot Solution</strong>을 개발하여 물류센터의 재고 및 로봇 출하를 관리하는 솔루션을 구축하였음.</p>
                                </li>
                                <li>
                                    <strong>JPA</strong>
                                    <p> - 객체 관계 매핑을 통해 복잡한 데이터 모델을 효과적으로 관리하였고, <strong>재고 및 경로 관리 시스템</strong>에서 데이터베이스 관리 경험이 있음.</p>
                                </li>
                                <li>
                                    <strong>Spring Framework</strong>
                                    <p> - 마이크로서비스 아키텍처를 구현하였으며, <strong>Fleet Management System</strong>에서 다양한 외부 서비스와 통합하여 로봇과의 통신 및 비즈니스 프로세스를 가시화하였음.</p>
                                </li>
                                <li>
                                    <strong>MyBatis</strong>
                                    <p> - 데이터베이스 접근 및 ORM 구현을 통해 <strong>모니터링 관제 및 작업 관리</strong> 시스템에서 성능 최적화 경험이 있음.</p>
                                </li>
                                <li>
                                    <strong>Node.js</strong>
                                    <p> - 비동기 처리로 성능을 최적화하여 <strong>로봇 관리 프로그램</strong>을 구축하였고, 각 로봇의 상태 요소들을 호출하는 API를 개발하였음.</p>
                                </li>
                                <li>
                                    <strong>Nest.js</strong>
                                    <p> - 최신 프레임워크를 활용하여 효율적인 서버 측 애플리케이션을 개발한 경험이 있음.</p>
                                </li>
                                <li>
                                    <strong>React</strong>
                                    <p> - 사용자 인터페이스 구축 경험이 있으며, <strong>리포트 페이지 목업 개발</strong>을 통해 응답 속도를 약 5~10초 정도 향상시켰음.</p>
                                </li>
                                <li>
                                    <strong>Camunda</strong>
                                    <p> - 비즈니스 프로세스 관리 및 자동화 도구를 활용하여 <strong>업무 프로세스 최적화</strong>를 통해 효율성을 향상시키고, <strong>코딩 없는 프로세스</strong>를 개발하여 사용자가 직접 로봇을 제어할 수 있는 서비스를 만들었음.</p>
                                </li>
                            </ol>
                        </li>
                        <li className="highlight">
                            <strong>데이터베이스</strong>
                            <ol>
                                <li>
                                    <strong>PostgreSQL</strong>
                                    <p> - <strong>Fleet Management System</strong>에서 데이터 모델링 및 쿼리 최적화를 통해 성능을 개선하였음.</p>
                                </li>
                                <li>
                                    <strong>Oracle</strong>
                                    <p> - <strong>Warehouse Kitting Robot Solution</strong>에서 물류센터의 기준정보를 관리하고 모델링 설계를 하였음.</p>
                                </li>
                                <li>
                                    <strong>MariaDB</strong>
                                    <p> - 데이터 모델링과 스키마 설계를 통해 <strong>Fleet Management System</strong>에서 성능 개선을 이루었음.</p>
                                </li>
                            </ol>
                        </li>
                        <li className="highlight">
                            <strong>통신 프로토콜 및 메시징</strong>
                            <ol>
                                <li>
                                    <strong>MQTT</strong>
                                    <p> - 로봇과의 실시간 데이터 송수신을 통해 제어 요청 및 상태 확인을 구현한 경험이 있음.</p>
                                </li>
                                <li>
                                    <strong>TCP Socket</strong>
                                    <p> - 안정적인 데이터 전송을 위해 실시간 송수신을 구현하여 설비와의 연계성을 높였음.</p>
                                </li>
                                <li>
                                    <strong>RabbitMQ</strong>
                                    <p> - 이벤트 기반 아키텍처를 구현하여 서비스와 프론트 간의 상호 응답성을 개선하였고, 로드 밸런싱을 통해 시스템 안정성을 높였음.</p>
                                </li>
                                <li>
                                    <strong>OPC UA</strong>
                                    <p> - 산업 자동화를 위한 데이터 통신 프로토콜을 설계하여 다양한 설비들의 인터페이스 단일화를 이루었음.</p>
                                </li>
                            </ol>
                        </li>
                        <li className="highlight">
                            <strong>도구 및 기술</strong>
                            <ol>
                                <li>
                                    <strong>Docker</strong>
                                    <p> - 컨테이너화 및 배포 환경 자동화를 설계하였고, Docker Hub를 통해 이미지 버전 관리를 경험, compose를 통해 simple setup 파일 생성.</p>
                                </li>
                                <li>
                                    <strong>Jenkins</strong>
                                    <p> - CI/CD를 이용하여 배포 환경 자동화를 경험하였고, 서비스 릴리즈 정보를 관리.</p>
                                </li>
                                <li>
                                    <strong>SonarQube</strong>
                                    <p> - 코드 품질 개선을 위한 내부 소스코드 유효성 검사 및 오류 수정을 경험.</p>
                                </li>
                            </ol>
                        </li>
                    </div>
                </section>
            </div>
            <div className="button-container_resume">
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/')}>돌아가기</button>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/loading/resumeCareer')}>상세 경력 보기</button>
            </div>
        </div>
    );
};

export default ResumeCareer;
