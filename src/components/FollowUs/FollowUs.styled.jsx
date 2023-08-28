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
    
  }
`;

export const StyledLink = styled.a`
  width: 24px;
  height: 24px;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px solid #F3F3F3;

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

export const getStyledIcon = component => styled(component)`
  width: 22px;
  height: 22px;
  fill: #F3F3F3;
  @media screen and(min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;