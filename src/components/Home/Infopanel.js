import { useState, useEffect } from "react";
import "../../styles/Home/Infopanel.css";
import WeatherPanel from "./WeatherPanel";
import BusPanel from "./BusPanel";

const Infopanel = () => {

    return (
        <div className="infopanel-container">
        <div className="left-panel">
            <WeatherPanel />
        </div>
        <div className="right-panel">
            <BusPanel />
        </div>
    </div>
);
};

export default Infopanel;