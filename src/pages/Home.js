import React from "react";
import "../styles/Home/Home.css";
import Header from "../components/Home/Header";
import Infopanel from "../components/Home/Infopanel";
import Contents from "../components/Home/Contents";

const Home = () => {
    return (
        <div className="back">
            <Header />
            <Infopanel />
            <Contents />
        </div>
    );
};

export default Home;
