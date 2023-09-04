import styled from "@emotion/styled";

export const SubTitleStyled = styled.h2`
  display: block;
  color: ${(props) => props.theme.colors.white};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: ${32 / 28};
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: ${44 / 40};
  }
`;
