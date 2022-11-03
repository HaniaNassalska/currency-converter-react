import "./style.css";
import useDate from "./useDate";

const Clock = () => {

    const currentDate = useDate();

    return (
        <p className="clock">
            Dzisiaj jest {" "}
            {currentDate.toLocaleString("pl-PL", { weekday: "long", day: "numeric", month: "long"})},
            {" "}
            {currentDate.toLocaleString("pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" })}
        </p>
    )
};

export default Clock; 