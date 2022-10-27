import "./style.css";



const Aside = ({ asideContentDate, asideContentHour}) => (
    <p className="asideContent">Dzisiaj jest {asideContentDate}, {asideContentHour}</p>);

export default Aside; 