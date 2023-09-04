import styled from "@emotion/styled";

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light" ? theme.colors.black : theme.colors.white};
  color: ${(props) => props.theme.colors.blue};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  border: ${({ theme }) =>
    theme.currentTheme === "light" ? "1px solid black" : "0"};
  transition: background-color 250ms ease, color 250ms ease;
  :hover {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light" ? theme.colors.green : theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
  }
`;
