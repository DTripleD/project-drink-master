import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding-top: 40px;
  padding-bottom: 18px;
  border-top: 1px solid ${props => props.theme.borderColor};

  form {
    margin: 0 auto 80px auto ;
  }

  @media(min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;

    form {
      margin: 0;
    }
  }
`;

export const StyledWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 28px;
  }

  @media (min-width: 1440px) {
    gap: 40px;
  }
`;

export const StyledBottomWrapper = styled.div`
  * {
    font-size: 12px;
    line-height: calc(16 / 12);
    letter-spacing: -0.24px;
    color: ${props => props.theme.secondaryTextColor};
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    line-height: calc(18/14);
    letter-spacing: -0.28px;
  }
`;

export const StyledFlexWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 18px;
  }
`;