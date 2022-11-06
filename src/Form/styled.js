import styled from "styled-components"

export const StyledForm = styled.form`
`

export const StyledFieldset = styled.fieldset`
`

export const StyledLegend = styled.legend`
padding: 15px;
`

export const StyledLebel = styled.label`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;


    @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: auto;
    }
`

export const StyledLabelText = styled.div`
    padding: 20px;
    line-height: normal;

    @media (max-width: 768px) {
        padding: 10px;
    }
`

export const StyledField = styled.input`
    display: grid;
    padding: 8px;
    max-width: 200px;
    height: 45px;
    margin: 15px;

    @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
         margin: 5px;
    }
`

export const StyledButton = styled.button`
    background-color: ${({theme})=> theme.colors.black};
    color: ${({theme})=> theme.colors.white};
    padding: 10px;
    margin: 30px;
    font-weight: 500;
    border: solid ${({theme})=> theme.colors.yellow};

    &:hover {
        background-color: ${({theme})=> theme.colors.yellow};
        color: ${({theme})=> theme.colors.black};
        border: solid ${({theme})=> theme.colors.black};
    }
`

export const StyledInfo = styled.p`
    font-size: 12px;
`

export const StyledResult = styled.p`
    font-size: 23px;
    margin-left: 40px;
`

export const StyledAmount = styled.span`
    font-weight: 700;
`

