import styled from "@emotion/styled";
import glass_s2 from "../../images/bg/porto-glass_s@2x.jpg";
import glass_s1 from "../../images/bg/porto-glass_s@1x.jpg";
import glass_m2 from "../../images/bg/porto-glass_m@2x.jpg";
import glass_m1 from "../../images/bg/porto-glass_m@1x.jpg";
import glass_l2 from "../../images/bg/porto-glass_l@2x.jpg";
import glass_l1 from "../../images/bg/porto-glass_l@1x.jpg";

import bg_white_1 from "../../images/bg-white/white-bg@1x.png";
import bg_white_2 from "../../images/bg-white/white-bg@2x.png";

export const ErrorPageWrapper = styled.div`
  ${({ theme }) =>
    theme.currentTheme === "light"
      ? `background-image: url(${bg_white_1});`
      : `background-image: linear-gradient(
      176.63deg, #0A0A11, 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg, #0A0A11, 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg, #0A0A11, -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg, #0A0A11, 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${glass_s1});`}

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? `background-image: url(${bg_white_2});`
        : `background-image: linear-gradient(
      176.63deg, #0A0A11, 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg, #0A0A11, 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg, #0A0A11, -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg, #0A0A11, 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${glass_s2});`}
  }

  @media screen and (min-width: 768px) {
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? `background-image: url(${bg_white_1});`
        : `background-image: linear-gradient(
      176.63deg, #0A0A11, 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg, #0A0A11, 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg, #0A0A11, -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg, #0A0A11, 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${glass_m1});`}
    width: 465px;
    height: 517px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? `background-image: url(${bg_white_2});`
          : `background-image: linear-gradient(
      176.63deg, #0A0A11, 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg, #0A0A11, 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg, #0A0A11, -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg, #0A0A11, 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${glass_m2});`}
    }
  }

  @media screen and (min-width: 1440px) {
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? `background-image: url(${bg_white_1});`
        : `background-image: linear-gradient(
      176.63deg, #0A0A11, 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg, #0A0A11, 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg, #0A0A11, -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg, #0A0A11, 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${glass_l1});`}

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? `background-image: url(${bg_white_2});`
          : `background-image: linear-gradient(
      176.63deg, #0A0A11, 1.42%,
      rgba(10, 10, 17, 0) 24.97%
    ),
    linear-gradient(
      281.81deg,#0A0A11, 12.84%,
      rgba(10, 10, 17, 0) 58.63%
    ),
    linear-gradient(
      359.21deg, #0A0A11, -1.94%,
      rgba(10, 10, 17, 0) 21.95%
    ),
    linear-gradient(
      86.16deg, #0A0A11, 8.41%,
      rgba(10, 10, 17, 0) 46.6%
    ),
    url(${glass_l2});`}
    }
  }

  width: 375px;
  height: 476px;
  background-position: center;

  background-size: cover;
  position: relative;
  background-repeat: no-repeat;

  margin-left: auto;
  margin-right: auto;
  margin-top: 83px;
  margin-bottom: 140px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 301px;
  justify-content: space-between;
`;

export const ErrorText = styled.h2`
  font-weight: 600;
  font-size: 120px;
  line-height: 123px;

  ${({ theme }) =>
    theme.currentTheme === "light"
      ? `color:  rgba(19, 17, 17, 0.884);`
      : `color:  rgba(243, 243, 243, 0.1);`}
  color:;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 150px;
  }

  @media (min-width: 1440px) {
    font-size: 150px;
  }
`;

// Size
// 120px
