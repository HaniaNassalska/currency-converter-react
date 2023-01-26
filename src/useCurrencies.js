import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencies = () => {
  const [ratesData, setRatesData] = useState({ state: "loading", })
  useEffect(() => {

    const currenciesData = async () => {
      try {

        const response = await axios.get("https://api.exchangerate.host/latest?base=PLN&${+new Date()}");
        const { date, rates } = await response.data;

        setRatesData({
          rates,
          date,
          state: "success",
        });
      }
      catch (error) {
        setRatesData({ state: "error" })
      }
    };

    setTimeout(currenciesData, 1000);
  }, []);
  return ratesData;
}
export default useCurrencies;
