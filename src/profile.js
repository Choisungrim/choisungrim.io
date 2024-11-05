import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './styles.css';
import requestImageUrl from './resource/request.jpg';
import responseImageUrl from './resource/response.jpg';
import MemoPage from './memo.js'; // MemoPage 컴포넌트 임포트

const Profile = () => {
    const [messages, setMessages] = useState([]);
    const [isMemoVisible, setIsMemoVisible] = useState(false);

    const navigate = useNavigate (); // useHistory 훅을 사용하여 페이지 이동
    
    useEffect(() => {
        document.title = 'portfolio'; // 문서 제목 설정
    }, []);
    
    const toggleMemo = () => {
        setIsMemoVisible(!isMemoVisible);
        const mainContainer = document.querySelector('.main_container');

        if (!isMemoVisible) {
            mainContainer.classList.add('shifted'); // 메모 페이지가 열릴 때 클래스를 추가
        } else {
            mainContainer.classList.remove('shifted'); // 메모 페이지가 닫힐 때 클래스를 제거
        }
    };

    const sendMessage = (type) => {
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 200); // 300ms = 0.3초

        const messageText = type === 'Career' ? '네 경력이 궁금해!' : type === 'Skill' ? '네 기술이 궁금해!' : '네 포폴이 궁금해!';
        const imageUrl = responseImageUrl;
        const chat_bot_image = requestImageUrl;

        const userMessage = { sender: '상대방', text: messageText, image: imageUrl, class: 'response-message' };
        const botMessageText = type === 'Career' ? CareerMessage() : type === 'Skill' ? SkillMessage(): PoflioMessage();
        const botMessage = { sender: 'Chat-bot', text: botMessageText, image: chat_bot_image, class: 'response-message_1' };

        setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    };

    const CareerMessage = () => {
        const careerText = setCareerMsg();
        
        return (
            <div style={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                {careerText}
                <div className="chatbot-button" onClick={() => navigate('/loading/resumeCareer')}>상세 경력 보기</div>
                <div className="chatbot-button" onClick={resetChat}>처음으로 돌아가기</div>
            </div>
        );
    };
    
    const SkillMessage = () => {
        const skillText = setSkillMsg();
        
        return (
            <div style={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                {skillText}
                <div className="chatbot-button" onClick={() => navigate('/loading/resumeSkill')}>상세 기술 보기</div>
                <div className="chatbot-button" onClick={resetChat}>처음으로 돌아가기</div>
            </div>
        );
    };

    const PoflioMessage = () => {
        const pofolioText = setPofolioMsg();
        
        return (
            <div style={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                {pofolioText}
                <div className="chatbot-button" onClick={() => navigate('/loading/resumePortfolio')}>상세 포폴 보기</div>
                <div className="chatbot-button" onClick={resetChat}>처음으로 돌아가기</div>
            </div>
        );
    }

    const ResetMessage = () => {
        return (
            <div style={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                <div className="chatbot-button" onClick={() => sendMessage('Career')}>내 경력이 궁금해?</div>
                <div className="chatbot-button" onClick={() => sendMessage('Skill')}>내 기술이 궁금해?</div>
                <div className="chatbot-button" onClick={() => sendMessage('Portfolio')}>내 포폴이 궁금해?</div>
            </div>
        );
    }

    const resetChat = () => {
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 200); // 300ms = 0.3초
        const messageText = '처음으로 돌아갑니다.'
        const imageUrl = responseImageUrl;
        const chat_bot_image = requestImageUrl;

        const userMessage = { sender: '상대방', text: messageText, image: imageUrl, class: 'response-message' };
        const botMessageText = ResetMessage()
        const botMessage = { sender: 'Chat-bot', text: botMessageText, image: chat_bot_image, class: 'response-message_1' };

        setMessages(prevMessages => [...prevMessages, userMessage, botMessage]); // 메시지 초기화
    };

    const setCareerMsg = () => {
        return (
            "현재 (주)티라로보틱스 솔루션 개발팀에서 2022년 7월부터 2024년 7월 31일까지 근무하고.\n" +
            "Python 기반 로봇관제 시스템에서 트래픽 제어 및 이벤트 처리를 담당하였어, 주 업무는 python으로 구현한 시스템을 Spring Framework으로 포팅한 웹 애플리케이션 개발을 수행했어\n" +
            "물류 로봇 키팅 솔루션을 개발하고, Spring Boot와 JPA를 이용한 웹서버 시스템을 구축했고,\n" +
            "사용자가 프로세스를 수정할 수 있도록 Camunda와 연동 개발을 담당했어\n" +
            "이전에는 (주)시스게이트에서 2년간 인프라 운영 유지보수 및 백업관리를 수행했어.\n" +
            "자세한 내용은 아래 버튼을 클릭해줘\n"
        );
    };
    

    const setSkillMsg = () => {
        return (
            "다양한 기술을 활용하여 웹 애플리케이션을 개발하고있어. \n" +
            "Java, Spring, MySQL, Docker 등 백엔드 개발을 한 경험이 있고, Node.js와 Nest.js로 서버 사이드 애플리케이션을 구축한 경험이있어. \n" +
            "또한, React와 jQuery 등 프론트엔드 기술에 대한 기본적인 이해도를 가지고 있고, \n" +
            "이러한 기술을 바탕으로 효율적이고 안정적인 웹 애플리케이션 개발을 주력으로 하고있어.\n" +
            "자세한 내용은 아래 버튼을 클릭해줘\n"
        );
    };


    const setPofolioMsg = () => {
        return (
            "경력 내용에 해당하는 프로젝트들을 상세히 정리해서 알려줄게! \n" +
            "아래 버튼을 클릭해줘\n"
        );
    };

    return (
        <div className="main_container">
            <div className="container">
                <div className="profile-image">
                    <img src={requestImageUrl} alt="내 이미지" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div className="message-area">
                    <h2>이름: 최성림</h2>
                    <p>나이: 29세</p>
                    <p>성격: 친절하고 호기심이 많음</p>
                </div>
                <div className="memo-button">
                    <div className="chatbot-button" onClick={toggleMemo}>
                        {isMemoVisible ? '<' : '>'}
                    </div>
                </div>
                <div className="uml-button">
                    <div className="chatbot-button" onClick={() => navigate('/loading/uml')}>uml페이지</div>
                </div>
            </div>
            <div className="button-container">
                <div className="profile-image-small">
                    <img src={requestImageUrl} alt="내 이미지" style={{ width: '50px', borderRadius: '10px' }} />
                    <div className="chatbot-bubble">
                        <div className="button-area">
                            <div className="chatbot-button" onClick={() => sendMessage('Career')}>내 경력이 궁금해?</div>
                            <div className="chatbot-button" onClick={() => sendMessage('Skill')}>내 기술이 궁금해?</div>
                            <div className="chatbot-button" onClick={() => sendMessage('Portfolio')}>내 포폴이 궁금해?</div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* 메시지를 표시할 영역 */}
            <div id="responseArea" className="response-area">
                {messages.map((message, index) => (
                    <div key={index} className={message.class} style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '10px', maxWidth: '70%', position: 'relative', marginBottom: '10px' }}>
                            {message.text}
                        </div>
                        <img src={message.image} alt="Response" style={{ width: '50px', borderRadius: '10px', marginLeft: '10px' }} />
                    </div>
                ))}
            </div>

            {/* 메모 페이지 표시 영역 */}
            {isMemoVisible && (
                <div className="memo-container">
                    <MemoPage />
                </div>
            )}
        </div>
    );
};


export default Profile; // 기본 내보내기
