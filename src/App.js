
import Clock from "./Clock";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import ExtraContentContainer from "./ExtraContentContainer";
import { currencies } from "./currencies";
import { useState, useEffect } from "react";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      resultValue: +amount / rate,
      currency
    });
  }

  const currenciesDate = () => (async () => {
    try {
      const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const currenciesList = await response.json();
      const currenciesLoadingDate = await currenciesList.date;
      return currenciesLoadingDate;
    }
    catch (error) {
      console.error(error)
    }
  })();
  console.log(currenciesDate());

  const [ratesData, setRatesData] = useState({ loading: true, error: false, rate: "", date: "" })
  useEffect(() => {
    setRatesData({ loading: true, error: false, rate: "", date: "" });
    setTimeout(() => {
      setRatesData({ loading: false, error: false, rate: "", date: "" });
    }, 1000);
  }, []);

  return (
    <Container>
      <Clock />
      <Header title={"Przelicz złotówki na dolary / euro / funty"} />
      {(() => {
        if (ratesData.loading === true) {
          return (
            <ExtraContentContainer text={"Trwa pobieranie danych. Poczekaj chwilę..."} />)
        } else if (ratesData.error === true) {
          return (
            <ExtraContentContainer text={"Coś poszło nie tak... Spróbuj później."} />
          )
        } else {
          return (
            <Form
              calculateResult={calculateResult}
              result={result}
            />
          )
        }

      })()}
      <Footer
        footerContent={"Kursy walut z dnia:"}
        footerDate={""} />
    </Container>
  );
}
export default App;