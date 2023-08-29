import styled from "@emotion/styled";

export const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 136px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
    padding-top: 160px;
    padding-bottom: 140px;
  }
`;