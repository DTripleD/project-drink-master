

import styled from "@emotion/styled";
import { ReactComponent as InputIcon } from '../../assets/sun.svg';


export const FooterSubscribeWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 12px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    row-gap: 0;
  }
`;

export const FooterSubscribeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 338px;
  margin-bottom: 28px;
  row-gap: 14px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const FooterSubscribeTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #fafafa;
`;

export const FooterSubscribetext = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

export const FooterSubscribeLabel = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 768px) {
    max-width: 259px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 338px;
    height: 59px;
    margin-bottom: 16px;
  }
`;

export const FooterSubscribeInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 10px;
  padding: 11.5px 10px 11.5px 42px;
  color: white;
  background-color: transparent;
  border: 1px solid #fafafa;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    padding: 14.5px 20px 14.5px 51px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 27px;
    padding: 17.5px 20px 17.5px 51.5px;
  }
`;

export const FooterSubscribeInputIcon = styled(InputIcon)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  width: 16px;
  height: 12px;

  @media screen and (min-width: 768px) {
    left: 15px;
    width: 20px;
    height: 16px;
  }

  @media screen and (min-width: 1440px) {
    left: 15.5px;
  }
`;

export const FooterSubscribeButton = styled.button`
  width: 100%;
  height: 56px;
  padding: 0;
  color: #F3F3F3;
  border: 1px solid #fafafa;
  border-radius: 6px;
  transition: all 300ms linear;

  &:hover {
    color: #F3F3F3;
  }

  @media screen and (min-width: 768px) {
    max-width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 338px;
    height: 60px;
  }
`;