import React from 'react';
import { useNavigate  } from 'react-router-dom';

const Resume = () => {
    const navigate = useNavigate ();

    return (
        <div style={{ padding: '20px' }}>
            <h2>이력서</h2>
            <p>최성림, 29세 남성입니다. ... (이력서 내용)</p>
            <button onClick={() => navigate('/')}>돌아가기</button>
        </div>
    );
};

export default Resume;
