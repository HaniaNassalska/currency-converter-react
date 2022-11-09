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
import { currencies } from "../currencies";

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
                        {currencies.map(currency =>
                            (<option 
                            key={currency.short} 
                            value={currency.short}>
                            {currency.name}
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