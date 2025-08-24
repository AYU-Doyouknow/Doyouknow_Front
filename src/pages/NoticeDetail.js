import { useEffect, useState ,  useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NoticeDetailHeader from "../components/Notice/NoticeDetailHeader";
import "../styles/Notice/NoticeDetail.css";


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

const NoticeDetail = () => {

    {/*useLayoutEffect(() => {
        const originalViewport = document.querySelector("meta[name=viewport]");

            // 기존 content 저장
            const originalContent = originalViewport?.getAttribute("content");

            // 화면 고정 해제 (확대 가능)
            originalViewport?.setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
            );

            // 페이지 나가면 다시 원래대로 복원
            return () => {
            if (originalViewport && originalContent) {
                originalViewport.setAttribute("content", originalContent);
            }
            };
        }, []);*/}

    const { id } = useParams();

    const [noticeData, setNoticeData] = useState(null);

    useEffect(() => {
        axios
            .get(`https://doyouknow.shop/notice/detail/${id}`)
            .then((res) => {
                console.log("Detail API 응답:", res.data);
                setNoticeData(res.data);
            })
            .catch((err) => console.error("API 호출 오류:", err));
    }, [id]);

    if (!noticeData) {
        return <div>Loading...</div>;
    }

    const updatedBody = addBaseUrlToImageSrc(noticeData.noticeBody);

    return (

        <div>
            <NoticeDetailHeader />
            <div className="noticeDetail-container">
                <div className="noticeDetail-fixed">
                <div className="noticeDetail-title">{noticeData.noticeTitle}</div>
                <hr className="title-footer" />
                <div className="notice-footer">
                    <span className="date">{noticeData.noticeDate}</span>
                    <span className="divider">|</span>
                    <span className="author">{noticeData.noticeWriter}</span>
                </div></div>
                <hr className="body-top" />
                <div className="noticeDetail-body">
                    <div dangerouslySetInnerHTML={{ __html: updatedBody || "" }}/>
                
                <p className="link-label">&lt;바로가기 링크&gt;</p>
                <a className="notice-link" >
                {/*href={noticeData.noticelink} 
                target="_blank" 
                rel="noopener noreferrer"
                 >
                {noticeData.noticelink} 수정필요*/}
                
                </a>

                </div>

            </div>
        </div>
     
    );
};

export default NoticeDetail;
