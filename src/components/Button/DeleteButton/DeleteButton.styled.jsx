import styled from "@emotion/styled";

export const StyledButton = styled.button`
  width: 54px;
  height: 54px;
  border-radius: 50%;

  transition: 0.3s ease;

  background: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: ${(props) => props.theme.colors.white};

  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "0px"};

  &:hover,
  :focus {
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
  fill: ${(props) => props.theme.colors.white};
  /* &:hover,
  :focus {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    fill: ${(props) => props.theme.colors.black};
  } */
  @media screen and(min-width: 768px) {
    height: 28px;
    width: 28px;
  }
`;
