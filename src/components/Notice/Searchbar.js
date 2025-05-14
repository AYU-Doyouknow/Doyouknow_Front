import React from "react";
import "../../styles/Notice/NTSearchbar.css";

const Searchbar = () => {

    return (
        <div className="search-bar"> 
            <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요"
           
            />

            <button className="search-button">
                검색
            </button>
        </div>

);
};
export default Searchbar;