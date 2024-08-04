import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/resumeCareer.css'; // 스타일 파일을 별도로 관리

const ResumeCareer = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = ''; // 문서 제목 설정
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={() => navigate('/')}>돌아가기</button>
            <div className="resume-container">
                <h1 className="resume-title">이력서</h1>

                <section className="resume-section">
                    <h2>개인 정보</h2>
                    <ul>
                        <p className="highlight">
                            이름: 최성림<br />
                            나이: 29세<br />
                            연락처: 010-7742-1587<br />
                            이메일: wowilos@naver.com
                        </p>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>경력 기술서</h2>
                    <ul>
                        <li className="highlight">
                            <strong>(주)티라로보틱스</strong> - 솔루션 개발팀 (2022/07/18 - 2024/07/31)
                            <ol>
                                <li>
                                    <strong>P사 FMS 시스템 구축</strong> (2022.07 ~ 2022.09)
                                    <p>주요 업무: AMR 연동 시스템 및 UI 개발, 네트워크 망 구축</p>
                                    <p>사용 기술: Python, TCP Socket, MQTT, PostgreSQL</p>
                                    <p>프로젝트 성과: AMR 회전 문제 해결</p>
                                    <p>해결 방안: AMR과의 원활한 통신을 위해 TCP Socket 및 MQTT 프로토콜을 활용하여 데이터 전송 및 수신을 최적화, UI에서의 피드백을 통해 실시간 모니터링을 구현하여 문제를 사전 예방, 이를 통해 AMR의 회전 문제를 효과적으로 해결</p>
                                </li>
                                <li>
                                    <strong>Amorepacific FMS 시스템 리빌딩</strong> (2022.08 ~ 2022.10)
                                    <p>주요 업무: PLC 신호 통신 및 트래픽 제어 구축</p>
                                    <p>사용 기술: Python, PLC, MQTT, PostgreSQL</p>
                                    <p>프로젝트 성과: 트래픽 제어 효율성 향상</p>
                                    <p>해결 방안: PLC 신호 통신을 최적화하여 트래픽 제어의 효율성을 높힘, 실시간 데이터 모니터링을 통해 문제가 발생할 때 즉각적으로 대처할 수 있는 시스템을 마련</p>
                                </li>
                                <li>
                                    <strong>WRS 개발 S사 POC</strong> (2022.11 ~ 2023.03)
                                    <p>주요 업무: WRS 솔루션 개발 및 로봇 메시징 프로토콜 구현</p>
                                    <p>사용 기술: Spring Boot, JPA, Mybatis, Oracle, MQTT, Java, JavaScript, RabbitMQ, Erlang</p>
                                    <p>프로젝트 성과: 자동화된 창고 키팅 솔루션 개발</p>
                                    <p>해결 방안: WRS 솔루션의 메시징 프로토콜을 개선하여 로봇 간의 효율적인 데이터 전송을 보장 및 자동화된 키팅 프로세스를 통해 물류 처리 속도를 크게 향상</p>
                                </li>
                                <li>
                                    <strong>FMS Version Upgrade</strong> (2023.01 ~ 진행 중)
                                    <p>주요 업무: FMS 솔루션 개발 및 로봇 간 트래픽 제어</p>
                                    <p>사용 기술: Spring Framework, Mybatis, MariaDB, Java, JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, TCP Socket, Camunda</p>
                                    <p>프로젝트 성과: 사용자 경험 개선</p>
                                    <p>해결 방안: 사용자 피드백을 반영한 UI/UX 개선 작업을 통해 직관적인 인터페이스를 구현, 트래픽 제어 알고리즘을 최적화하여 시스템의 반응 속도를 향상</p>
                                </li>
                                <li>
                                    <strong>T사 프로젝트</strong> (2023.09 ~ 2023.11)
                                    <p>주요 업무: 트래픽 제어 및 PLC 제어 개발</p>
                                    <p>사용 기술: Spring Framework, Mybatis, MariaDB, Java, JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, TCP Socket, Camunda</p>
                                    <p>프로젝트 성과: 트래픽 관리 및 제어 시스템 고도화</p>
                                    <p>해결 방안: PLC 제어 시스템을 더욱 정교하게 설계하여 트래픽 관리의 정확도를 높힘 데이터 분석을 통해 예측 가능한 트래픽 흐름을 구현</p>
                                </li>
                                <li>
                                    <strong>S사 대리점 개발</strong> (2023.11 ~ 2024.01)
                                    <p>주요 업무: 외부 API 개발 및 서비스 모듈화</p>
                                    <p>사용 기술: Spring Framework, Mybatis, MariaDB, Java, JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, TCP Socket, Camunda</p>
                                    <p>프로젝트 성과: API 통합 및 서비스 모듈화로 시스템 확장성 증대</p>
                                    <p>해결 방안: 외부 API와의 통합을 통해 데이터 흐름을 용이하게 개발 및 서비스 모듈화를 통해 시스템의 확장성을 높힘</p>
                                </li>
                                <li>
                                    <strong>C사 프로젝트</strong> (2024.02 ~ 2024.03)
                                    <p>주요 업무: 배포버전 개발 및 오더 관리</p>
                                    <p>사용 기술: Spring Framework, Mybatis, MariaDB, Java, JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, Camunda</p>
                                    <p>프로젝트 성과: 오더 관리 체계 구축 및 프로세스 관리 효율성 향상</p>
                                    <p>해결 방안: 오더 관리 시스템을 정교하게 설계하여 프로세스의 효율성을 높힘, 실시간 데이터 분석을 통해 관리 체계를 강화</p>
                                </li>
                                <li>
                                    <strong>FMS 솔루션 배포</strong> (2024.02 ~ 2024.04)
                                    <p>주요 업무: Docker를 이용한 FMS 솔루션 배포 환경 구성</p>
                                    <p>사용 기술: Docker, Docker Compose</p>
                                    <p>프로젝트 성과: FMS 솔루션 컨테이너화 및 배포 자동화</p>
                                    <p>해결 방안: Docker와 Docker Compose를 활용하여 배포 환경을 자동화, 이를 통해 유지보수의 용이성을 증대</p>
                                </li>
                                <li>
                                    <strong>H사 프로젝트</strong> (2024.06 ~ 2024.07)
                                    <p>주요 업무: 시나리오 통합 관리 및 차량 순회 로직 개발</p>
                                    <p>사용 기술: Spring Framework, Mybatis, MariaDB, Java, JavaScript, RabbitMQ, Erlang, MQTT, OPC_UA, Camunda</p>
                                    <p>프로젝트 성과: 차량 순회 관리 및 절전 모드 개발</p>
                                    <p>해결 방안: 차량 순회의 효율성을 높이기 위해 최적화된 알고리즘을 개발, 절전 모드를 통해 에너지 소비를 절감하는 솔루션을 구현.</p>
                                </li>
                            </ol>
                        </li>

                        <li className="highlight">
                            <strong>(주)프로그래밍교육센터</strong> - 교육 (2022/01 - 2022/07)
                            <ol>
                                <li>
                                    <strong>MineFluencer 웹 페이지 개발</strong> (2022.04 ~ 2022.08)
                                    <p>주요 업무: UI 기능 개발, AWS 서버 구축 및 패키징 배포 관리</p>
                                    <p>사용 기술: Java, Mybatis, JavaScript, MySQL, AWS EC2, Linux, Maven</p>
                                    <p>프로젝트 성과: Google API를 활용한 데이터 수집 및 업데이트 시스템 구축</p>
                                    <p>해결 방안: AWS EC2를 통해 안정적인 서버 환경을 구성, Google API를 활용하여 데이터 수집 및 업데이트 프로세스를 자동화하여 효율성을 높힘.</p>
                                    <p>산출물: <a href="https://github.com/Minefluencer/MineFluencer">GitHub 링크</a></p>
                                </li>
                            </ol>
                        </li>

                        <li className="highlight">
                            <strong>(주)시스게이트</strong> - 생명운영과 사원 (2019.09 ~ 2021.08)
                            <ol>
                                <li>
                                    <strong>운영 및 유지보수 관제</strong>
                                    <p>주요 업무: 인프라 운영 및 유지보수, 이벤트 뷰어를 통한 시스템 및 애플리케이션 모니터링, 백업 관리</p>
                                    <p>연봉: 2,545 만원</p>
                                    <p>주요 직무: 유지보수</p>
                                    <p>해결 방안: 시스템 모니터링 도구를 활용하여 인프라의 안정성을 높힘, 정기적인 백업 관리로 데이터 손실을 예방할 수 있는 체계를 구축</p>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </section>

                <section calssName="resume-section">
                    <h2>자격증</h2>
                    <ul>
                        <p className='highlight' >
                            2021.12 - SQL 개발자 - 한국데이터산업진흥원<br />
                            2021.11 - 정보처리기사 - 한국산업인력공단<br />
                            2020.06 - MOS - Microsoft<br />
                            2016.11 - 네트워크관리사 2급 - 한국정보통신자격협회
                        </p>
                    </ul>
                </section>

                <section calssName="resume-section">
                    <h2>블로그</h2>
                    <ul>
                        <p className='highlight' >
                            https://70658277.tistory.com/
                        </p>
                    </ul>
                </section>

                <section className="resume-section">
                    <h2>자기소개서</h2>
                    <ul>
                        <p className='highlight'>
                            저는 컴퓨터소프트웨어에 대한 열정을 바탕으로 지속적으로 성장하고 있는 개발자입니다. <br />
                            대학 시절부터 프로그래밍 언어와 기술을 학습하며, Java와 Spring Framework를 통해 웹사이트 개발에 재미와 성취감을 느꼈습니다. <br />
                            첫 직장에서는 서버 유지보수와 관리 업무를 담당하였으나, 개발 능력을 키우기 위해 6개월간 집중적으로 공부하였습니다.<br />
                            이후 티라로보틱스에서 솔루션개발팀으로 근무하며 다양한 프로젝트를 진행하였고, <br />
                            Message Queuing, Thread Safety, Camunda 등을 활용한 신규 솔루션 개발을 주도적으로 맡았습니다. <br />
                            팀원들과의 협업을 통해 문제 해결 능력과 팀워크의 중요성을 깨달았습니다. <br />
                            저의 강점은 새로운 기술을 빠르게 습득하고 이를 실무에 적용하는 능력이며,
                            경험이 부족한 부분에서는 꾸준히 학습하고 도전하는 자세를 유지하고 있습니다.<br />
                        </p>
                    </ul>
                </section>
            </div>
            <button onClick={() => navigate('/')}>돌아가기</button>
        </div>
    );
};

export default ResumeCareer;
