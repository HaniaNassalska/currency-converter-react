import {
    StyledForm,
    Fieldset,
    Legend,
    Lebel,
    LabelText,
    Field,
    Button,
    Info,
    Result,
    Amount
} from "./styled";
import { useState } from "react";
import useCurrencies from "../useCurrencies";

const Form = ({ calculateResult, result }) => {

    const ratesData = useCurrencies();

    const [currency, setCurrency] = useState("USD");
    const onSelectChange = ({ target }) => setCurrency(target.value);

    const [amount, setAmount] = useState("");
    const onInputChange = ({ target }) => setAmount(target.value);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>
                    Kalkulator walut
                </Legend>
                <Lebel>
                    <LabelText>
                        Kwota w zł:
                        <Info>
                            (pole obowiązkowe)
                        </Info>
                    </LabelText>
                    <Field
                        value={amount}
                        onChange={onInputChange}
                        type="number"
                        name="PLN"
                        min="0"
                        step="any"
                        required
                    />
                </Lebel>
                <Lebel>
                    <LabelText>
                        Wybierz walutę:
                    </LabelText>
                    <Field
                        as="select"
                        value={currency}
                        onChange={onSelectChange}
                    >
                        {Object.keys(ratesData.rates).map(rate =>
                        (<option
                            key={rate}
                            value={rate}>
                            {rate}
                        </option>)
                        )}
                    </Field>
                </Lebel>
            </Fieldset>
            <Button>
                Przelicz!
            </Button>
            <Result>
                Kwota:
                {result !== undefined && (
                    <Amount>
                        {(result.resultValue).toFixed(2)} {result.currency}
                    </Amount>
                )}
            </Result>
        </StyledForm>
    )
};

export default Form;