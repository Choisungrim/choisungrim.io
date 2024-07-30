import React, { useState } from 'react';
import './styles.css';

const Profile = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = (type) => {
        const messageText = type === 'Career' ? '내 경력에 대해 이야기합니다.' : '내 기술에 대해 이야기합니다.';
        const imageUrl = '/resource/response.jpg'; // 사용할 이미지 URL
        const chat_bot_image = '/resource/image1.jpg'; // 사용할 이미지 URL

        // 사용자 메시지 추가
        const userMessage = { sender: '상대방', text: messageText, image: imageUrl, class: 'response-message' };
        
        // 챗봇 응답 메시지 추가
        const botMessageText = messageText === 'Career' ? '경력에 대한 정보를 표시합니다.' : '기술에 대한 정보를 표시합니다.';
        const botMessage = { sender: 'Chat-bot', text: botMessageText, image: chat_bot_image, class: 'response-message_1' };

        // 두 메시지를 한 번에 상태에 추가
        setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    };

    return (
        <div className="main_container">
            <div className="container">
                <div className="profile-image">
                    <img src="/resource/image1.jpg" alt="내 이미지" style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <div className="message-area">
                    <h2>이름: 홍길동</h2>
                    <p>나이: 25세</p>
                    <p>성격: 친절하고 호기심이 많음</p>
                </div>
            </div>
            <div className="button-container">
                <div className="profile-image-small">
                    <img src="/resource/image1.jpg" alt="내 이미지" style={{ width: '50px', borderRadius: '10px' }} />
                    <div className="chatbot-bubble">
                        <div className="button-area">
                            <div className="chatbot-button" onClick={() => sendMessage('Career')}>내 경력</div>
                            <div className="chatbot-button" onClick={() => sendMessage('Skill')}>내 기술</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 메시지를 표시할 영역 */}
            <div id="responseArea" className="response-area" style={{ marginTop: '20px' }}>
                {messages.map((message, index) => (
                    <div key={index} className={message.class} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <p style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '10px', maxWidth: '70%', position: 'relative' }}>
                            {message.text}
                        </p>
                        <img src={message.image} alt="Response" style={{ width: '50px', borderRadius: '10px', marginLeft: '10px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
