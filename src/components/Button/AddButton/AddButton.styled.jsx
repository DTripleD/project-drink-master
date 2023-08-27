import styled from "@emotion/styled";

export const StyledButton = styled.button`
  border-radius: 42px;
  padding: 14px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  transition: 0.3s ease;

  background: transparent;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: #f3f3f3;

  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : "0px"};

  &:hover,
  :focus {
    background: #f3f3f3;
    color: #0a0a11;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }

  @media (min-width: 1440px) {
    // empty.....for now
  }
`;
