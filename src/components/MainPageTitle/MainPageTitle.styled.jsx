import styled from "@emotion/styled";

const MainTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 56px;
    font-weight: 600;
    line-height: calc(60 / 56);
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
    font-weight: 600;
    line-height: calc(68 / 64);
    margin-bottom: 62px;
  }
`;

export default MainTitle;
