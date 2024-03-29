import Clock from "./Clock";
import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import ExtraContentContainer from "./ExtraContentContainer";
import useCurrencies from "./useCurrencies";
import { useState } from "react";

function App() {
  const ratesData = useCurrencies();

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      resultValue: +amount * rate,
      currency,
    });
  };

  return (
    <Container>
      <Clock />
      <Header title={"Przelicz dolary na inne waluty"} />
      {ratesData.state === "loading" ? (
        <ExtraContentContainer
          text={"Trwa pobieranie danych. Poczekaj chwilę..."}
        />
      ) : ratesData.state === "error" ? (
        <ExtraContentContainer
          text={"Coś poszło nie tak. Spróbuj później..."}
        />
      ) : (
        <Form
          calculateResult={calculateResult}
          result={result}
          ratesData={ratesData}
        />
      )}
      <Footer
        footerExtraContent={"Źródło danych: exchangerate.host"}
      />
    </Container>
  );
}
export default App;
