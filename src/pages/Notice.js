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
    const [size, setSize] = useState(10); // 한 페이지에 보여줄 게시글 수
    const [totalRecords, setTotalRecords] = useState(0); // 전체 게시글 수
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
   

    const categories = ["전체", "대학교", "학사", "대학원", "취업정보", "입찰/채용"];
    const fetchNotices = async () => {
        try {
            let res;

            if (searchKeyword.trim() !== "") {
                res = await axios.get("https://doyouknow.shop/notice/search", {
                    params: {
                        noticeSearchVal: searchKeyword,
                        page: page,
                        size: size,
                    },
                });
            } else {
                if (selectedCategory === "전체") {
                    res = await axios.get(`https://doyouknow.shop/notice/all?page=${page}&size=${size}`);
                } else {
                    res = await axios.get(
                        `https://doyouknow.shop/notice/category?noticeCategory=${encodeURIComponent(
                            selectedCategory
                        )}&page=${page}&size=${size}`
                    );
                }
            }

            setNotices(res.data.content);
            setTotalRecords(res.data.totalElements);
        } catch (err) {
            console.error("API 호출 오류:", err);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, [selectedCategory, page, searchKeyword]);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setPage(0);
        setSearchKeyword(""); 
    };

    const handlePageChange = (event) => {
        setPage(event.page);
    };


    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
        setPage(0);
    };
    
    
    return (
        <div>
            <NoticeHeader />
            <NoticeCategory
                categories={categories}
                onSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
            />
            <Searchbar onSearch={handleSearch}  />
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




