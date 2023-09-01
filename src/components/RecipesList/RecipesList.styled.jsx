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
  /* position: relative;
  z-index: 1; */
  display: grid;
  row-gap: 28px;
  grid-template-columns: repeat(1, 1fr);
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
  color: #f3f3f3;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
