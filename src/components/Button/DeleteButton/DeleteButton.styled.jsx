import styled from "@emotion/styled";

export const StyledButton = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  padding: 0px;
  /* transition: 0.3s ease; */
  transition: background-color 0.3s ease, box-shadow 400ms ease,
    scale 400ms ease;

  background: ${(props) => props.theme.colors.blue};
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.colors.white
        : "rgba(243, 243, 243, 0.2)"};
  color: ${(props) => props.theme.colors.white};

  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "0px"};

  &:hover,
  :focus {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    // empty.....for now
  }
`;
export const getStyledIcon = (component) => styled(component)`
  width: 22px;
  height: 22px;
  background: transparent;
  fill: transparent;
  stroke: currentColor;
  @media screen and(min-width: 768px) {
    height: 28px;
    width: 28px;
  }
`;
