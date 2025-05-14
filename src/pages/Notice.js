import React, { useEffect, useState } from "react";
import NoticeHeader from "../components/Notice/NoticeHeader";
import NoticeCategory from "../components/Notice/NoticeCategory";
import Searchbar from "../components/Notice/Searchbar";
import NoticeList from "../components/Notice/NoticeList";
import axios from "axios";
import { Paginator } from "primereact/paginator";

const Notice = () => {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(0); // 현재 페이지 (0부터 시작)
    const [size, setSize] = useState(10); // 한 페이지에 보여줄 수
    const [totalRecords, setTotalRecords] = useState(0); // 전체 게시글 수

    const categories = ["전체", "대학교", "학사", "대학원", "취업정보", "입찰/채용"];

    const fetchNotices = async () => {
        try {
            let url = `https://doyouknow.shop:/notice/all?page=${page}&size=${size}`;
            if (selectedCategory !== "전체") {
                url = `https://doyouknow.shop/notice/category?noticeCategory=${encodeURIComponent(
                    selectedCategory
                )}&page=${page}&size=${size}`;
            }

            const res = await axios.get(url);
            console.log("API 응답:", res.data);
            setNotices(res.data.content);
            setTotalRecords(res.data.totalElements);
        } catch (err) {
            console.error("API 호출 오류:", err);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, [selectedCategory, page]); // 카테고리나 페이지 바뀔 때마다 호출

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setPage(0); // 카테고리 바뀌면 페이지 0으로 초기화
    };

    const handlePageChange = (event) => {
        setPage(event.page); // 페이지 이동
    };

    return (
        <div>
            <NoticeHeader />
            <NoticeCategory
                categories={categories}
                onSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
            />
            <Searchbar />
            <NoticeList notices={notices} />
            <div style={{ margin: "-10px -10px" }}>
                <Paginator
                    first={page * size}
                    rows={size}
                    totalRecords={totalRecords}
                    onPageChange={handlePageChange}
                    pt={{
                        pageButton: { className: "custom-page-btn" },
                        nextPageButton: { className: "custom-btn" },
                        prevPageButton: { className: "custom-btn" },
                    }}
                />
            </div>
        </div>
    );
};

export default Notice;
