
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
    const rate = ratesData.rates[currency]

    setResult({
      resultValue: +amount * rate,
      currency
    });
  }

  return (
    <Container>
      <Clock />
      <Header title={"Przelicz złotówki na inne waluty"} />
      {ratesData.state === "loading" ?
        (
          <ExtraContentContainer text={"Trwa pobieranie danych. Poczekaj chwilę..."} />
        ) : (
          ratesData.state === "error") ?
          (
            <ExtraContentContainer text={"Coś poszło nie tak. Spróbuj później..."} />
          ) : (
            <Form
              calculateResult={calculateResult}
              result={result}
              ratesData={ratesData}
            />
          )
      }
      <Footer
        footerDateContent={"Kursy walut z dnia:"}
        footerDate={ratesData.date}
        footerExtraContent={"Źródło danych: exchangerate.host (dostarczane dane walutowe pochodzą od dostawców danych finansowych i banków, w tym Europejskiego Banku Centralnego). "} />
    </Container>
  );
}
export default App;