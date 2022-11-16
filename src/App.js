
import Clock from "./Clock";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import ExtraContentContainer from "./ExtraContentContainer";
import useCurrencies from "./useCurrencies";
import { currencies } from "./currencies";
import { useState } from "react";

function App() {
  const ratesData = useCurrencies();

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
            <ExtraContentContainer text={"Coś poszło nie tak. Spróbuj później..."} />
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
        footerDate={ratesData.date} />
    </Container>
  );
}
export default App;