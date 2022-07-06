import Container from "./Container";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";
import { currencies } from "./Form/currencies";
import { useState } from "react";



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

  return (
    <Container>
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