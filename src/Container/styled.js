import styled from "styled-components";

export const StyledContainer = styled.main`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 17px;
  padding: 20px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.yellow};
  margin: 10px auto;
  max-width: 800px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 17px;
    padding: 20px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.yellow};
    margin: 10px auto;
    max-width: 800px;
  }
`;
