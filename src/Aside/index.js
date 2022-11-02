import "./style.css";

const Aside = ({ asideContentDate, asideContentHour}) => (
    <p className="aside">Dzisiaj jest {asideContentDate}, {asideContentHour}</p>);

export default Aside; 