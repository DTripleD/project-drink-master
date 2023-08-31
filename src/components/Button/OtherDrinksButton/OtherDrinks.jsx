import { StyledOtherButton, StyledOtherWrapper } from "./OtherDrinks.styled";

export const OtherDrinksButton = () => {
  return (
    <StyledOtherWrapper>
      <StyledOtherButton to={"/drinks"}>Other Drinks</StyledOtherButton>
    </StyledOtherWrapper>
  );
};

// export default OtherDrinksButton;
