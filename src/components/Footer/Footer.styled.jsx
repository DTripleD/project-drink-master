import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding-top: 40px;
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  

  @media screen and (min-width: 768px) {
    
    padding-top: 80px;
    padding-bottom: 24px;
   
    width: 100%;
    box-sizing: border-box;

    
  }

  @media screen and (min-width: 1440px){
    align-items: center;
	  justify-content: space-between;
	 
	  width: 100%;
	  box-sizing: border-box;
    
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0 auto 80px auto;
    display: flex;
    
    justify-content: space-between;
    
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    
  }
`;

export const StyledContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 100%;
    // margin: 0 auto;
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 300px;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const StyledBox = styled.div`
  padding-top: 0;
  
   @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    
  }
  
`;

export const StyledBottomWrapper = styled.div`
  * {
    font-size: 12px;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  
  

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
  }
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 8px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-top: 0px;
  }
`;
