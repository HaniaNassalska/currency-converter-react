import { useState, useEffect } from "react";

const useCurrencies = () => {
    const [ratesData, setRatesData] = useState({ loading: true, error: false, rate: "", date: "" })
  useEffect(() => {
    setRatesData({ loading: true, error: false, rate: "", date: "" });
    const currenciesData = () => (async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const currenciesList = await response.json();
        setRatesData({ date: currenciesList.date, rate: currenciesList.rates })
      }
      catch (error) {
        setRatesData({ error: true })
      }
    })();

    setTimeout(() => {
      currenciesData();
      setRatesData({ loading: false, error: false});
    }, 1000);
  }, []);
    return ratesData
}
export default useCurrencies;
