import styled from "@emotion/styled";

export const Section = styled.div`
  max-width: 100%;
  margin-bottom: 80px;
  overflow: hidden;
`;

export const SectionTitle = styled.p`
  color: #f3f3f3;
  font-family: Manrope, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 44px;
  margin-bottom: 40px;
`;

export const Cardwrapper = styled.div`
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 100%;
  }
`;
