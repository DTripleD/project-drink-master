import styled from "@emotion/styled";

export const StyledList = styled.ul`
  width: fit-content;
  padding: 0;
  margin: 0;
  

  display: flex;
  gap: 14px;

  list-style: none;

  @media screen and(min-width: 768px) {
    gap: 16px;
     
	}
  
`;

export const StyledLink = styled.a`
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white};

  transition: border-color 400ms ease, transform 400ms ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  @media screen and(min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;


export const getStyledIcon = (component) => styled(component)`
  width: 22px;
  height: 22px;
  fill: ${(props) => props.theme.colors.white};
  @media screen and(min-width: 768px) {
     height: 28px;
  }
`;

