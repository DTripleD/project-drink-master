import styled from "@emotion/styled";

const RecipeTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 32px;
font-weight: 600;
line-height: 38px;
margin-bottom: 20px;

@media (min-width: 768px) {
    font-size: 56px;
    line-height: 60px; 
    margin-bottom: 28px;
  }

  @media (min-width: 1440px) {
font-size: 64px;
line-height: 68px;
  }
`;

export default RecipeTitle;