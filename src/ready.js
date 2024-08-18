import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/resumeCareer.css'; // 스타일 파일을 별도로 관리
import loadingImage from './resource/ready.gif'; // 움직이는 이미지 경로

const Ready = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = '준비중'; // 문서 제목 설정
        window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 맨 위로 이동
    }, []);
    
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <img src={loadingImage} alt="준비중 이미지" style={{ width: '35vw', height: 'auto' }} />
            <div className="button-container_resume" style={{ marginTop: '20px' }}>
                <button className='chatbot-button_resume' onClick={() => handleNavigate('/')}>돌아가기</button>
            </div>
        </div>
    );
};

export default Ready;
