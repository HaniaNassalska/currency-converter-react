import "./style.css";
import { useState } from "react";

const Form = () => {
    const [amount, setAmount] = useState("");
    const onInputChange = ({ target }) => setAmount(target.value);
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(`Wpisano kwotę: ${amount}`);
    };


    const [currency, setCurrency] = useState("");
    const onSelectChange = ({ target }) => setCurrency(target.value);

    console.log(`Wybrano walutę: ${currency}`);

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
                            type="number" name="PLN"  min="0" step="any" required />
                    </label>
                </p>
                <label>
                    <span className="form__labelText">Wybierz walutę:</span>
                </label>
                <select value={currency} onChange={onSelectChange} className="form__field">

                    <option value="USD">dolar (USD)</option>
                    <option value="EUR">euro (EUR)</option>
                    <option value="GBP">funt (GBP)</option>
                </select>
            </fieldset>
            <button className="form__button">Przelicz!</button>
            <p className="form__requaierdInfo">*pole obowiązkowe</p>

        </form>

    )
};




export default Form;