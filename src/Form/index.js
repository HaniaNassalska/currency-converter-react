import "./style.css";
import { useState } from "react";
import { currencies } from "./currencies";



const Form = ({ calculateResult, result }) => {


    const [currency, setCurrency] = useState(currencies[0].short);
    const onSelectChange = ({ target }) => setCurrency(target.value);

    const [amount, setAmount] = useState("");
    const onInputChange = ({ target }) => setAmount(target.value);


    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };




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
                        <span className="form__requaierdInfo">
                        </span>
                    </div>

                    <select
                        value={currency}
                        onChange={onSelectChange}
                        className="form__field">

                        {currencies.map(currency =>
                            (<option key={currency.short} value={currency.short}>{currency.name}</option>)
                        )}
                    </select>
                </label>
            </fieldset>
            <button className="form__button">
                Przelicz!
            </button>

            <p className="form__result">
                Kwota:

                {result !== undefined && (<span className="form__result--amount">

                    {(result.resultValue).toFixed(2)} {result.currency}
                </span>
                )}

            </p>

        </form>

    )
};


export default Form;