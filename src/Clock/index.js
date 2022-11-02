import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const currentDateId = setInterval(() => {
            (setCurrentDate(new Date()));
        }, 500);
        return () => {
            clearInterval(currentDateId);
        };
    },);

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const currentTimeId = setInterval(() => {
            (setCurrentTime(new Date()));
        }, 500);
        return () => {
            clearInterval(currentTimeId);
        };
    },);

    return (
        <p className="clock">
            Dzisiaj jest {" "}
            {currentDate.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long"})},
            {" "}
            {currentTime.toLocaleString("pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" })}
        </p>
    )
};

export default Clock; 