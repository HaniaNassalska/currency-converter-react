import Aside from "./Aside";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import { currencies } from "./currencies";
import { useState, useEffect } from "react";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ short }) => short === currency
      ).rate;

    setResult({
      resultValue: +amount / rate,
      currency
    });
  }

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
    <Container>
      <Aside
        asideContentDate={currentDate.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long" })}
        asideContentHour={currentTime.toLocaleString("pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" })}
      />
      <Header title={"Przelicz złotówki na dolary / euro / funty"} />
      <Form
        calculateResult={calculateResult}
        result={result}
      />
      <Footer footerContent={"Kursy walut z dnia 28.06.2022 r."} />
    </Container>
  );
}
export default App;