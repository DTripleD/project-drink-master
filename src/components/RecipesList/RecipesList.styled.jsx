import styled from "@emotion/styled";

export const Section = styled.section`
  max-width: 100%;
  margin-bottom: 40px;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
export const MyRecipesListStyled = styled.ul`
  display: grid;
  row-gap: 28px;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 80px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 80px;
  }
`;

export const MessageTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
