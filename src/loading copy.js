import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './css/loading.css';

function Loading() {
  const { nextPage } = useParams();
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [drops, setDrops] = useState([]);
  const containerRef = useRef(null);
  const dropWidth = 10;
  const fallSpeed = 13; // 떨어지는 속도
  const animationRef = useRef(null); // 애니메이션 참조

  // 페이지 높이에 따라 maxDrops 계산
  const maxDrops = Math.floor(window.innerHeight / dropWidth) * 10; // 페이지 높이에 따라 구슬 수 조정

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500); // 로딩 바 속도 조절

    const timeout = setTimeout(() => {
      navigate(`/${nextPage}`);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate, nextPage]);

  // 드랍 생성
  useEffect(() => {
    const dropInterval = setInterval(() => {
      setDrops((prev) => {
        if (prev.length < maxDrops) {
          const leftPosition = Math.random() * (100 - (dropWidth / window.innerWidth) * 100);
          const newDrop = { left: leftPosition, top: 0, state: 'falling' };
          return [...prev, newDrop]; // 새로운 드랍 추가
        }
        return prev; // 최대 개수에 도달한 경우
      });
    }, 5); // 드랍 생성 주기를 짧게 설정하여 빠르게 생성

    return () => {
      clearInterval(dropInterval);
    };
  }, [maxDrops]);

  const fallDrops = useCallback(() => {
    setDrops((prev) => {
      const containerHeight = containerRef.current.clientHeight;

      return prev.map(drop => {
        if (drop.state === 'falling') {
          const newTop = drop.top + fallSpeed; // 떨어지는 속도 조절

          // 바닥에 닿는지 확인
          if (newTop >= containerHeight - dropWidth) {
            return { ...drop, top: containerHeight - dropWidth, state: 'waiting' }; // 바닥에 닿으면 멈춤
          }

          // 충돌 체크
          const collisionDrop = prev.find(otherDrop =>
            otherDrop.state === 'waiting' &&
            Math.abs(drop.left - otherDrop.left) < dropWidth / window.innerWidth * 100 && // left가 일정 범위 내에 있는지 확인
            newTop + dropWidth > otherDrop.top && // 새로운 드랍의 아래쪽이 waiting 드랍의 상단을 넘어가는지 확인
            newTop < otherDrop.top + dropWidth // 새로운 드랍의 위쪽이 waiting 드랍의 상단 + width에 있는지 확인
          );

          if (collisionDrop) {
            // 충돌 시 새로운 드랍의 상단을 waiting 드랍의 상단에 맞춤
            const waitingDropTop = collisionDrop.top; // 충돌한 드랍의 상단 위치
            return { ...drop, top: waitingDropTop - dropWidth, state: 'waiting' }; // 충돌한 드랍 위에 위치 조정
          }

          return { ...drop, top: newTop }; // 계속 떨어짐
        }
        return drop; // 상태가 'falling'이 아닌 경우 그대로 반환
      });
    });

    animationRef.current = requestAnimationFrame(fallDrops); // 애니메이션 프레임 요청
  }, [fallSpeed, dropWidth]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(fallDrops); // 애니메이션 시작

    return () => {
      cancelAnimationFrame(animationRef.current); // 애니메이션 중지
    };
  }, [fallDrops]);

  return (
    <div className="next-page">
      <h1>로딩 중...</h1>
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${loadingProgress}%` }} />
      </div>
      <div className="raindrop-container" ref={containerRef}>
        {drops.map((drop, index) => (
          <div 
            key={index} 
            className="raindrop" 
            style={{
              position: 'absolute',
              left: `${drop.left}%`,
              top: `${drop.top}px`,
              backgroundColor: drop.state === 'waiting' ? 'red' : 'blue',
              width: `${dropWidth}px`,
              height: `${dropWidth}px`,
              borderRadius: '50%',
            }} 
          />
        ))}
      </div>
    </div>
  );
}

export default Loading;
