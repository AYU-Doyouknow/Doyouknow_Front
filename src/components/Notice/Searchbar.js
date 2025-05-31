import React, { useState } from "react";
import "../../styles/Notice/Searchbar.css";
//import axios from "axios";


const Searchbar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(input); 
    };

    return (
        <div className="search-bar"> 
            <input
                type="text"
                className="search-input"
                placeholder="검색어를 입력하세요"
                value={input}
                onChange={handleInputChange} 
            />
            <button className="search-button" onClick={handleSearchClick}>
                검색
            </button>

        </div>
    );
};

export default Searchbar;


