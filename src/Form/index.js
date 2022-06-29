import "./style.css";
import { useState } from "react";



const Form = () => {

    const [amount, setAmount] = useState("");
    const onInputChange = ({ target }) => setAmount(target.value);
    const onFormSubmit = (event) => {
        event.preventDefault();
    };


    const [currency, setCurrency] = useState("");
    const onSelectChange = ({ target }) => setCurrency(target.value);


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


    const publicResult = () => {
        const result = calculateResult(amount, currency);
        
        console.log(Number(result).toFixed(2));
        
    }






    return (
        <form onSubmit={onFormSubmit}>
            <fieldset>
                <legend
                    className="form__legend">
                    Kalkulator walut
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota w zł*:</span>

                        <input value={amount} onChange={onInputChange} className="form__field"
                            type="number" name="PLN" min="0" step="any" required />
                    </label>
                </p>
                <label>
                    <span className="form__labelText">Wybierz walutę:</span>
                </label>
                <select value={currency} onChange={onSelectChange} className="form__field">

                    <option />
                    <option value="USD">dolar (USD)</option>
                    <option value="EUR">euro (EUR)</option>
                    <option value="GBP">funt (GBP)</option>
                </select>
            </fieldset>
            <button className="form__button" onClick={publicResult} >Przelicz!</button>
            <p className="form__requaierdInfo">*pole obowiązkowe</p>
            


        </form>

    )
};


export default Form;