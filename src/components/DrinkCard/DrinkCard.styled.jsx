import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 24px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    max-width: 342px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 400px;
  }
`;
export const OneMoreWrapper = styled.div`
  border-radius: 15px;
  transition: scale 400ms ease, box-shadow 400ms ease;
  &:hover,
  &:focus {
    scale: 0.98;
    /* scale: 1.02; */
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
`;
export const ImageWrapper = styled.div`
  width: 335px;
  height: 360px;
  border-radius: 15px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 600ms ease, box-shadow 400ms ease;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.024) 51.18%,
    rgba(10, 10, 17, 0.768) 97.66%
  );

  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  &:hover,
  &:focus {
    transform: scale(0.98);
    box-shadow: 0 0 12px rgba(243, 243, 243, 0.5);
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const Ingredientswrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  ${(props) =>
    props.position === "my" || props.position === "favorite"
      ? `flex-direction: column; gap: 4px;`
      : `flex-direction: row`}
`;
// || 'favorites'
export const Drinkingreds = styled.p`
  color: ${(props) => props.theme.textColor};
  font-family: Manrope, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
`;
export const Ingredients = styled.span`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.white
      : "rgba(243, 243, 243, 0.5)"};
  font-family: Manrope, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const AboutStyled = styled.p`
  display: inline-block;
  height: 45px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    display: inline-block;

    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`;

export const Wrapper = styled.div``;
