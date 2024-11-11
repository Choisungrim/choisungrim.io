import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/resumeCareer.css'; // 스타일 파일을 별도로 관리
import Minefluencer from './resource/minefluencer.png';
import UmlGenerator from './resource/UMLGenerator.jpeg';
import Profile_Info from './resource/Profile_Info.jpeg';
import Influencer_Ranking from './resource/Influencer_Ranking.JPG';

const ResumeCareer = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const imagesWithDescriptions = {
        Minefluencer : {src : Minefluencer},
        UmlGenerator : {src : UmlGenerator},
        Profile_Info : {src : Profile_Info},
        Influencer_Ranking : {src : Influencer_Ranking}
    }

    useEffect(() => {
        document.title = 'portfolio'; // 문서 제목 설정
        window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 맨 위로 이동
    }, []);
    
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
        setSelectedImage('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className="button-container_resume">
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/')}>돌아가기</button>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/loading/resumeCareer')}>상세 경력 보기</button>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/loading/resumeSkill')}>상세 기술 보기</button>
            </div>
            <div className="resume-container">
                <h1 className="resume-title">포트폴리오</h1>

                <section className="resume-section">
                    <div>
                        <li className="highlight">
                            <strong>1. MineFluencer</strong>
                            <ol>
                                <li className="flex-container">
                                <div className="text-content">
                                    <ol>
                                        <li>
                                            <strong>프로젝트 개요</strong>
                                            <p> 마인플루언서는 사용자의 관심사에 맞춘 인플루언서를 추천하여 쉽고 빠르게 찾을 수 있도록 도와주며,</p>
                                            <p> 원하는 인플루언서만 모아서 볼 수 있으며 요즘 핫한 인플루언서를 분야별로 순위를 볼 수 있는 플랫폼이다.</p>
                                        </li>
                                        <li>
                                            <strong>개발 소개</strong>
                                            <p>1-1. 팀 구성</p>
                                            <ol>
                                                <p>Front-End 3명 (UI/UX 포함), Back-End 3명 (서버 구성, 아키텍처, DB 포함) </p>
                                            </ol>
                                            <p>1-2. 개발 기간</p>
                                            <ol>
                                                <p>3개월 (2022.04 ~ 2022.07)</p>
                                            </ol>
                                            <p>1-3. 담당 업무</p>
                                            <ol>
                                                <p>Model-View-Controller 구조 설계 및 구현</p>
                                                <p>순위, 회원가입, 조회, 추천, Mylist등 API 기능 구현</p>
                                                <p>DB 설계 및 쿼리튜닝</p>
                                                <p>AWS 서버를 이용한 배포 구성(EC2)</p>
                                            </ol>
                                            <p>1-4. 사용 기술 스택</p>
                                            <ol>
                                                <p>Java 8, Spring Framework 5.2.4, JavaScript, AWS(EC2), MariaDB, Mybatis, Linux, Maven</p>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                                <div className="image-container">
                                        <img src={Minefluencer} alt="Minefluencer" className="inline-image_one" onClick={() => openModal('Minefluencer')} />
                                        <p></p>
                                        <img src={Influencer_Ranking} alt="Influencer_Ranking" className="inline-image_one" onClick={() => openModal('Influencer_Ranking')} />
                                    </div>
                                </li>
                            </ol>
                        </li>
                        <li className="highlight">
                            <strong>2. 나를 소개하는 글</strong>
                            <ol>
                                <li className="flex-container">
                                <div className="text-content">
                                    <ol>
                                        <li>
                                            <strong>프로젝트 개요</strong>
                                            <p>
                                                나에대한 소개를 담은 페이지를 구성함으로써 이력서를 정적인페이지를 통해 모든 곳에서 확인할 수 있다. 
                                            </p>
                                        </li>
                                        <li>
                                            <strong>개발 소개</strong>
                                            <p>2-1. 팀 구성</p>
                                            <ol>
                                                <p>개인</p>
                                            </ol>
                                            <p>2-2. 개발 기간</p>
                                            <ol>
                                                <p>2개월 (2022.08 ~ 2022.10)</p>
                                            </ol>
                                            <p>2-3. 담당 업무</p>
                                            <ol>
                                                <p>정적인 페이지 구현 및 배포</p>
                                                <p>이미지 클릭 시 모달 표시</p>
                                                <p>페이지 전환 시 애니메이션 추가</p>
                                                <p>Cache를 이용하여 메모장 페이지 구현</p>
                                                <p>UML Generator를 이용한 페이지 구성</p>
                                            </ol>
                                            <p>2-4. 사용 기술 스택</p>
                                            <ol>
                                                <p>react, plantUML, gh-pages, node.js, JavaScript</p>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                                    <div className="image-container">
                                        <img src={Profile_Info} alt="Profile_Info" className="inline-image_one" onClick={() => openModal('Profile_Info')} />
                                    </div>
                                </li>
                            </ol>
                        </li>
                        <li className="highlight">
                            <strong>3. UMLGenerator</strong>
                            <ol>
                                <li className="flex-container">
                                <div className="text-content">
                                    <ol>
                                        <li>
                                            <strong>프로젝트 개요</strong>
                                            <p> Java Spring의 ApplicationContext를 활용하여 </p>
                                            <p> 해당 프로젝트의 클래스 정보 및 PlantUML annotation을 통하여 지정한 클래스들에 대해 클래스다이어그램을 생성하는 기능이다.</p>
                                        </li>
                                        <li>
                                            <strong>개발 소개</strong>
                                            <p>3-1. 팀 구성</p>
                                            <ol>
                                                <p>개인</p>
                                            </ol>
                                            <p>3-2. 개발 기간</p>
                                            <ol>
                                                <p>1개월 (2022.10 ~ 2022.11)</p>
                                            </ol>
                                            <p>3-3. 담당 업무</p>
                                            <ol>
                                                <p>UML Generator를 이용한 페이지 구성</p>
                                                <p>PlantUML 외부 라이브러리를 활용하여 포맷하여 변환해주는 작업 기능 구현</p>
                                                <p>빌드하여 이외 패키지에 접목시켜 anootation을 통해 정해진 클래스들의 다이어그램을 작성</p>
                                            </ol>
                                            <p>3-4. 사용 기술 스택</p>
                                            <ol>
                                                <p>react, plantUML, Spring Boot, Java, RestAPI</p>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                                <div className="image-container">
                                        <img src={UmlGenerator} alt="UmlGenerator" className="inline-image_one" onClick={() => openModal('UmlGenerator')} />
                                    </div>
                                </li>
                            </ol>
                        </li>
                    </div>
                </section>
            </div>

            {isModalOpen && (
            <div className="modal" onClick={closeModal}>
                <div className="imagebox" 
                        onClick={closeModal}>
                    <div className="close" onClick={closeModal}>&times;</div>
                    <img 
                        src={selectedImage} 
                        alt="Selected" 
                        className="modal-image" 
                    />
                </div>
            </div>
            )}
            <div className="button-container_resume">
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/')}>돌아가기</button>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/loading/resumeCareer')}>상세 경력 보기</button>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/loading/resumeSkill')}>상세 기술 보기</button>
            </div>
        </div>
    );
};

export default ResumeCareer;
