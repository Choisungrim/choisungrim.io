import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './styles.css';
import requestImageUrl from './request.jpg';
import responseImageUrl from './response.jpg';

const Profile = () => {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate (); // useHistory 훅을 사용하여 페이지 이동

    useEffect(() => {
        document.title = 'portfolio'; // 문서 제목 설정
    }, []);

    const sendMessage = (type) => {
        const messageText = type === 'Career' ? '네 경력이 궁금해!' : '네 기술이 궁금해!';
        const imageUrl = responseImageUrl;
        const chat_bot_image = requestImageUrl;

        const userMessage = { sender: '상대방', text: messageText, image: imageUrl, class: 'response-message' };
        const botMessageText = type === 'Career' ? CareerMessage() : SkillMessage();
        const botMessage = { sender: 'Chat-bot', text: botMessageText, image: chat_bot_image, class: 'response-message_1' };

        setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    };

    const CareerMessage = () => {
        const careerText = setCareerMsg();
        
        return (
            <div style={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                {careerText}
                <div className="chatbot-button" onClick={() => navigate('/resumeCareer')}>상세 경력 보기</div>
                <div className="chatbot-button" onClick={resetChat}>처음으로 돌아가기</div>
            </div>
        );
    };
    
    const SkillMessage = () => {
        const skillText = setSkillMsg();
        
        return (
            <div style={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                {skillText}
                <div className="chatbot-button" onClick={() => navigate('/resumeSkill')}>상세 기술 보기</div>
                <div className="chatbot-button" onClick={resetChat}>처음으로 돌아가기</div>
            </div>
        );
    };

    const resetChat = () => {
        setMessages([]); // 메시지 초기화
    };

    const setCareerMsg = () => {
        return (
            "최성림, 29세 남성입니다.\n" +
            "현재 (주)티라로보틱스에서 솔루션 개발팀 사원으로 2022년 7월부터 재직 중이며,\n" +
            "Python 기반의 로봇관제 시스템에서 로봇 간 트래픽 제어, 상위 시스템과의 인터페이스,\n" +
            "반송 작업 관련 이벤트 처리 및 Sequence Flow Chart 설계를 담당하였고,\n" +
            "이후, Spring FrameWork 기반의 웹 애플리케이션으로 포팅하는 작업 및 신규 개발을 담당하였습니다.\n" +
            "또한, Warehouse Robot Kitting Solution(WRS) 개발에 참여하여 Spring Boot와 JPA를 이용한 \n" +
            "웹서버 기반의 시스템을 구축하였고, 로봇관제 시스템의 트랜잭션 관리 및 메시징 프로토콜을 통해 다수의 로봇 간의 트래픽 제어 시스템을 개발했습니다.\n" +
            "이전에는 (주)시스게이트에서 2년간 인프라 운영 유지보수 업무를 수행하며 시스템 모니터링과 백업 관리 업무를 담당했습니다.\n" +
            "좀 더 상세한 내용을 원하시면 아래의 버튼을 클릭해주세요.\n"
        );
    };

    const setSkillMsg = () => {
        return (
            "저는 Java, Spring, MySQL, MariaDB, Docker, Camunda, JPA, Node.js, Nest.js 등 다양한 기술을 활용하여 웹 애플리케이션을 개발하고 있습니다. \n" +
            "Spring 프레임워크를 이용한 백엔드 개발에 능숙하며, Node.js와 Nest.js를 사용하여 서버 사이드 애플리케이션도 구축하고 있습니다. \n" +
            "또한, React와 jQuery 등 프론트엔드 기술에 대한 흐름을 이해하고 있으며, 필요한 부분에 대해서도 기본적인 지식을 갖추고 있습니다. \n" +
            "이러한 기술들에 대한 전반적인 이해를 바탕으로 효율적이고 안정적인 웹 애플리케이션을 개발하는 데 주력하고 있습니다.\n" +
            "좀 더 상세한 내용을 원하시면 아래의 버튼을 클릭해주세요.\n"
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
            </div>
            <div className="button-container">
                <div className="profile-image-small">
                    <img src={requestImageUrl} alt="내 이미지" style={{ width: '50px', borderRadius: '10px' }} />
                    <div className="chatbot-bubble">
                        <div className="button-area">
                            <div className="chatbot-button" onClick={() => sendMessage('Career')}>내 경력이 궁금해?</div>
                            <div className="chatbot-button" onClick={() => sendMessage('Skill')}>내 기술이 궁금해?</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 메시지를 표시할 영역 */}
            <div id="responseArea" className="response-area" style={{ marginTop: '20px' }}>
                {messages.map((message, index) => (
                    <div key={index} className={message.class} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <div style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '10px', maxWidth: '70%', position: 'relative' }}>
                            {message.text}
                        </div>
                        <img src={message.image} alt="Response" style={{ width: '50px', borderRadius: '10px', marginLeft: '10px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile; // 기본 내보내기
