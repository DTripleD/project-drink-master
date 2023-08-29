import styled from "@emotion/styled";

export const Main = styled.div`
  max-width: 375px;
  padding: 0 20px;
  margin: 0 auto;

  outline: 1px solid tomato;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;

    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;

    padding: 0 100px;
  }
`;
