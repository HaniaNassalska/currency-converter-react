import { useState, useEffect } from "react";

const useDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const currentDateId = setInterval(() => {
            (setCurrentDate(new Date()));
        }, 500);
        return () => {
            clearInterval(currentDateId);
        };
    },);
    return currentDate
}
export default useDate;
