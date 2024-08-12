import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/loading.css";

const DROP_WIDTH = 10; // 드랍의 너비
const FALL_SPEED = 13; // 떨어지는 속도
const LOADING_INTERVAL = 500; // 로딩 바 속도
const DROP_CREATION_INTERVAL = 5; // 드랍 생성 주기
const MAX_DROP_MULTIPLIER = 10; // 최대 드랍 수 조정 배수

function Loading() {
  const { nextPage } = useParams();
  const navigate = useNavigate();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [drops, setDrops] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null); // 애니메이션 참조

  // 페이지 높이에 따라 maxDrops 계산
  const maxDrops = Math.floor(window.innerHeight / DROP_WIDTH) * MAX_DROP_MULTIPLIER;

  // 로딩 진행률 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, LOADING_INTERVAL);

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
          const leftPosition = Math.random() * (100 - (DROP_WIDTH / window.innerWidth) * 100);
          const newDrop = { left: leftPosition, top: 0, state: "falling" };
          return [...prev, newDrop]; // 새로운 드랍 추가
        }
        return prev; // 최대 개수에 도달한 경우
      });
    }, DROP_CREATION_INTERVAL);

    return () => {
      clearInterval(dropInterval);
    };
  }, [maxDrops]);

  const fallDrops = useCallback(() => {
    if (!containerRef.current) return; // containerRef가 null인 경우 처리

    const containerHeight = containerRef.current.clientHeight;

    setDrops((prev) => {
      return prev.map((drop) => {
        if (drop.state === "falling") {
          const newTop = drop.top + FALL_SPEED; // 떨어지는 속도 조절

          // 바닥에 닿는지 확인
          if (newTop >= containerHeight - DROP_WIDTH) {
            return {
              ...drop,
              top: containerHeight - DROP_WIDTH,
              state: "waiting",
            }; // 바닥에 닿으면 멈춤
          }

          // 충돌 체크: 'falling' 상태와 'waiting' 상태 모두 확인
          const collisionDrops = prev.filter(
            (otherDrop) =>
              otherDrop.state === "waiting" &&
              drop.left + (DROP_WIDTH / window.innerWidth) * 100 > otherDrop.left &&
              drop.left < otherDrop.left + (DROP_WIDTH / window.innerWidth) * 100 &&
              newTop + DROP_WIDTH > otherDrop.top &&
              newTop < otherDrop.top + DROP_WIDTH
          );

          if (collisionDrops.length > 0) {
            const waitingDropTop = Math.min(...collisionDrops.map((d) => d.top));
            return {
              ...drop,
              top: waitingDropTop - DROP_WIDTH,
              state: "waiting",
            };
          }

          return { ...drop, top: newTop }; // 계속 떨어짐
        }
        return drop; // 상태가 'falling'이 아닌 경우 그대로 반환
      });
    });

    animationRef.current = requestAnimationFrame(fallDrops); // 애니메이션 프레임 요청
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(fallDrops); // 애니메이션 시작

    return () => {
      cancelAnimationFrame(animationRef.current); // 애니메이션 중지
    };
  }, [fallDrops]);

  const anyDropWaiting = drops.some(drop => drop.state === "waiting");

  return (
    <div className="next-page">
      <h1>로딩 중...</h1>
      <div className="loading-bar">
        <div
          className="loading-fill"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
      <div className="raindrop-container" ref={containerRef}>
        {drops.map((drop, index) => (
          <div
            key={index}
            className="raindrop"
            style={{
              position: "absolute",
              left: `${drop.left}%`,
              top: `${drop.top}px`,
              backgroundColor: drop.state === "waiting" ? "red" : "blue",
              width: `${DROP_WIDTH}px`,
              height: `${DROP_WIDTH}px`,
              borderRadius: "50%",
            }}
          />
        ))}
        {anyDropWaiting && (
          <div className="text">
            CHOI SUNG RIM
          </div>
        )}
      </div>
    </div>
  );
}

export default Loading;
