import styled from "@emotion/styled";

export const SeeButtonStyled = styled.button`
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background-color: ${(props) => props.theme.colors.blue};
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.colors.white
        : "rgba(243, 243, 243, 0.2)"};
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 400ms ease,
    scale 400ms ease;

  &:hover,
  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }

  @media (min-width: 768px) {
    width: 169px;
    height: 54px;
    font-size: 16px;
    line-height: calc(18 / 16);
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media (min-width: 1440px) {
  }
`;
