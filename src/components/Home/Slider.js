import React, { useState, useEffect, useRef } from "react";
import "../../styles/Home/Slider.css";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ["/images/slide3.png", "/images/slide1.png", "/images/slide2.png"];

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    // 스와이프 동작 처리
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        const threshold = 50; // 스와이프 감지 최소 거리

        if (deltaX > threshold) {
            // 왼쪽으로 스와이프 → 다음 이미지
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (deltaX < -threshold) {
            // 오른쪽으로 스와이프 → 이전 이미지
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="slide-box" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="slide">
                {images[currentIndex] === "/images/slide3.png" ? (
                    <a
                        href="https://www.anyang.ac.kr/main/communication/notice.do?mode=view&articleNo=33074&article.offset=0&articleLimit=15&srSearchVal=%EC%A2%85%ED%95%A9%EA%B0%95%EC%9D%98%EC%8B%9C%EA%B0%84%ED%91%9C"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={images[currentIndex]} alt={`슬라이드 이미지 ${currentIndex + 1}`} />
                    </a>
                ) : (
                    <img src={images[currentIndex]} alt={`슬라이드 이미지 ${currentIndex + 1}`} />
                )}
            </div>

            {/* 인디케이터 */}
            <div className="indicator">
                {images.map((_, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(index)}></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
