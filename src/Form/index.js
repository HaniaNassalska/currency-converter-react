import "./style.css";
import { useState } from "react";

const currencies = [
    { short: "EUR", name: "euro", rate: 4.68 },
    { short: "USD", name: "dolar", rate: 4.22 },
    { short: "GBP", name: "funt", rate: 5.55 }
]

const Form = () => {

    const [amount, setAmount] = useState("");
    const onInputChange = ({ target }) => setAmount(target.value);
    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(Number(resultAmount).toFixed(2))
    };


    const [currency, setCurrency] = useState("");
    const onSelectChange = ({ target }) => setCurrency(target.value);

    const [result, setResult] = useState("0.00")


    const calculateResult = (amount, currency) => {
        const eurRate = 4.68;
        const usdRate = 4.22;
        const gbpRate = 5.55;

        switch (currency) {
            case "USD":
                return amount / usdRate;

            case "EUR":
                return amount / eurRate;

            case "GBP":
                return amount / gbpRate;
            default:
                return ("0.00")
        }
    };

    const resultAmount = calculateResult(amount, currency);


    return (
        <form onSubmit={onFormSubmit}>
            <fieldset>
                <legend
                    className="form__legend">
                    Kalkulator walut
                </legend>

                <label className="form__label">
                    <div className="form__labelText">
                        Kwota w zł:
                        <br />
                        <span className="form__requaierdInfo">
                            (pole obowiązkowe)
                        </span></div>

                    <input
                        value={amount}
                        onChange={onInputChange}
                        className="form__field"
                        type="number"
                        name="PLN"
                        min="0"
                        step="any"
                        required
                    />
                </label>

                <label className="form__label">
                    <div className="form__labelText">
                        Wybierz walutę:
                        <br />
                        <span className="form__requaierdInfo">
                            (pole obowiązkowe)
                        </span>
                    </div>

                    <select
                        value={currency}
                        onChange={onSelectChange}
                        className="form__field">

                        {currencies.map(currency => 
                            (<option key={currency.short} value={currency.rate}>{currency.name}</option>)
                            )}
                    </select>
                </label>
            </fieldset>
            <button className="form__button">
                Przelicz!
            </button>

            <p className="form__result">
                Kwota:
                <span className="form__result--amount">
                    {result}
                </span>
            </p>

        </form>

    )
};


export default Form;