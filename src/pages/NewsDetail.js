import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/News/NewsDetail.css";
import Header from "../components/News/NewsHeader";
import axios from "axios";

// img 태그의 이미지 상대 경로를 절대 경로로 바꿔주는 함수
const addBaseUrlToImageSrc = (htmlString) => {
    const parser = new DOMParser(); // HTML 문자열 파싱하여 DOM 생성
    const doc = parser.parseFromString(htmlString, "text/html");
    const images = doc.querySelectorAll("img"); // 모든 img 태그 선택

    images.forEach((img) => {
        //선택된 img 태그에 대한 수행
        const src = img.getAttribute("src");
        if (src && !src.startsWith("https://")) {
            // src값이 존재하며, 절대경로로 시작하지 않으면
            img.setAttribute("src", `https://www.anyang.ac.kr${src}`); // 앞에 경로 붙여서 return
        }

        // 이미지 크기 설정
        img.setAttribute("width", "400");
        img.setAttribute("height", "600");
    });

    return doc.body.innerHTML;
};

const NewsDetail = () => {
    const { id } = useParams(); // URL에서 ID 가져오기
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        axios
            .get(`https://doyouknow.shop/news/detail/${id}`)
            .then((res) => {
                console.log("Detail API 응답:", res.data);
                setNewsData(res.data);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, [id]);

    if (!newsData) {
        return <div>Loading...</div>;
    }

    const updatedBody = addBaseUrlToImageSrc(newsData.newsBody);

    return (
        <div className="news-detail">
            <Header />
            <div className="noticeDetail-container">
                <div className="noticeDetail-title">{newsData.newsTitle}</div>
                <hr className="title-footer" />
                <div className="notice-footer">
                    <span className="date">{newsData.newsDate}</span>
                    <span className="divider">|</span>
                    <span className="author">{newsData.newsWriter}</span>
                </div>
                <hr className="body-top" />
                <div
                    className="noticeDetail-body"
                    dangerouslySetInnerHTML={{ __html: updatedBody || "" }}
                />
            </div>
        </div>
    );
};

export default NewsDetail;
