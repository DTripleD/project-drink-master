import styled from "@emotion/styled";

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 24px;
  /* max-width: 100%; */

  @media screen and (min-width: 768px) {
    display: flex;
    /* justify-content: flex-start; */
    justify-content: space-between;
    max-width: 342px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    max-width: 400px;
    justify-content: space-between;
  }
`;

export const ItemImg = styled.img`
  display: block;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.024) 51.18%,
    rgba(10, 10, 17, 0.768) 97.66%
  );

  border-radius: 8px;
  box-shadow: 5px 4px 8px 0px rgba(34, 60, 80, 0.2);
  /* margin-bottom: 18px; */
  @media screen and (min-width: 768px) {
    /* margin-bottom: 24px; */
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;

export const ItemTextWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
 
  justify-content: space-between; */
  /* height: 124px; */
  gap: 18px;
  @media screen and (min-width: 768px) {
    /* display: flex; */
    /* flex-direction: column;
    justify-content: space-between; */
    gap: 24px;
    /* height: 252px; */
  }

  @media screen and (min-width: 1440px) {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    /* height: 252px; */
  }
`;

export const ItemTitle = styled.h3`
  /* margin-bottom: 4px; */
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 24px;

    line-height: 32px;
  }
`;

export const ItemGlass = styled.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const ItemDescription = styled.p`
  display: inline-block;
  height: 75px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    height: 110px;
  }

  @media screen and (min-width: 1440px) {
    display: inline-block;
    height: 96px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
