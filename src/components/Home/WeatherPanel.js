import React, { useEffect, useState } from "react";
import "../../styles/Home/WeatherPanel.css";
//import axios from "axios";

const WeatherPanel = () => {

    return(
        <div className="Weather">
             <div className="city">
                <h1>Anayng</h1>
                <img src="/images/weather-icon.png" alt="날씨 아이콘" className="weather-icon"/>
                 <div className="info-bottom">
                     <div className="temp">
                        8.0*
                        </div>
                        <div className="time-info">
                            <div className="weekday">목요일</div>
                            <div className="time">12:53PM</div>
                     </div>
                 </div>
             </div>
    </div>

);
};

export default WeatherPanel;


/*const WeatherCard = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = useCallback(() => {
        axios
            .get("/api/weather")
            .then((res) => {
                    setWeather(res.data);
                    
                })
                    .catch((err) => {console.log("api 호출 오류:", err)
                    });
         }, []);

          useEffect(() => {
                fetchWeather();
                }, [fetchWeather]);

            return (
            <div className="weather-card">
            <div className="city">{weather.city}</div>
             <img
                 src={`아이콘url 필요`}
                alt="weather icon"
                className="weather-icon"
            />
            <div className="info-bottom">
                <div className="temp">{weather.temp}°</div>
                <div className="time-info">
                    <div className="weekday">{weather.weekday}</div>
                    <div className="time">{weather.time}</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;*/