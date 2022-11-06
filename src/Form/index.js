import { 
    StyledForm,
    StyledFieldset, 
    StyledLegend,
    StyledLebel,
    StyledLabelText,
    StyledField,
    StyledButton,
    StyledInfo,
    StyledResult,
    StyledAmount 
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
            <StyledFieldset>
                <StyledLegend>
                    Kalkulator walut
                </StyledLegend>

                <StyledLebel>
                    <StyledLabelText>
                        Kwota w zł:
                        <StyledInfo>
                            (pole obowiązkowe)
                        </StyledInfo>
                    </StyledLabelText>

                    <StyledField
                        value={amount}
                        onChange={onInputChange}
                        type="number"
                        name="PLN"
                        min="0"
                        step="any"
                        required
                    />
                </StyledLebel>

                <StyledLebel>
                    <StyledLabelText>
                        Wybierz walutę:
                    </StyledLabelText>

                    <StyledField
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
                    </StyledField>
                </StyledLebel>
            </StyledFieldset>
            <StyledButton>
                Przelicz!
            </StyledButton>

            <StyledResult>
                Kwota:
                {result !== undefined && (
                    <StyledAmount>
                        {(result.resultValue).toFixed(2)} {result.currency}
                    </StyledAmount>
                )}
            </StyledResult>
        </StyledForm>
    )
};

export default Form;