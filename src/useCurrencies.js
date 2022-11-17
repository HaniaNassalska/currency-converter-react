import { useState, useEffect } from "react";

const useCurrencies = () => {
  const [ratesData, setRatesData] = useState({ loading: true, error: false, rates: "", date: "" })
  useEffect(() => {
    const currenciesData = () => (async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const currenciesList = await response.json();
        setRatesData({ loading: false, error: false, date: currenciesList.date, rates: currenciesList.rates })
      }
      catch (error) {
        setRatesData({ error: true })
      }
    })();

    setTimeout(currenciesData, 1000);
  }, []);
  return ratesData;
}
export default useCurrencies;
