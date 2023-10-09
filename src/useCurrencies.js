import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencies = () => {
    const [ratesData, setRatesData] = useState({ state: "loading" });
    useEffect(() => {
        const currenciesData = async () => {
            try {
                const response = await axios.get(
                  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_WSXh9ISEg17BMXOESCQy8eodq5tWkbKXFAjnkWSW"
                );
                const { data } = await response.data;

                if (data) {
                    setRatesData({
                      rates: data,
                      state: "success",
                    });
                } else {
                  setRatesData({ state: "error" });
                }
              } catch (error) {
                setRatesData({ state: "error" });
              }
        };

        setTimeout(currenciesData, 1000);
    },
        []);
    return ratesData;
};
export default useCurrencies;
