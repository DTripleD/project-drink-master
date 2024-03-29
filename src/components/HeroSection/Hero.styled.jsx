import styled from "@emotion/styled";

import bg_image_s2 from "../../images/hero-bg/hero_bg_s@2x.jpg";
import bg_image_s1 from "../../images/hero-bg/hero_bg_s@1x.jpg";
import bg_image_m2 from "../../images/hero-bg/hero_bg_m@2x.jpg";
import bg_image_m1 from "../../images/hero-bg/hero_bg_m@1x.jpg";
import bg_image_l2 from "../../images/hero-bg/hero_bg_l@2x.jpg";
import bg_image_l1 from "../../images/hero-bg/hero_bg_l@1x.jpg";

import bg_white_1 from "../../images/bg-white/white-bg@1x.png";
import bg_white_2 from "../../images/bg-white/white-bg@2x.png";

export const Hero = styled.section`
  height: 700px;
  ${({ theme }) =>
    theme.currentTheme === "light"
      ? `background-image: url(${bg_white_1});`
      : `background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url(${bg_image_s1});`}
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;

  margin-bottom: 100px;
  margin-right: -40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? `background-image: url(${bg_white_2});`
        : `background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url(${bg_image_s2});`}
  }

  @media screen and (min-width: 768px) {
    height: 1001px;
    margin-right: -64px;
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? `background-image: url(${bg_white_1});`
        : `background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url(${bg_image_m1});`}

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? `background-image: url(${bg_white_2});`
          : `background-image: linear-gradient(
          0.95deg,
          #0a0a11 -0.56%,
          rgba(10, 10, 17, 0) 21.93%
        ),
        linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
        url(${bg_image_m2});`}
    }
  }

  @media screen and (min-width: 1440px) {
    height: 790px;
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? `background-image: url(${bg_white_1});`
        : `background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url(${bg_image_l1});`}
    margin-right: -200px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? `background-image: url(${bg_white_2});`
          : `background-image: linear-gradient(
          0.95deg,
          #0a0a11 -0.56%,
          rgba(10, 10, 17, 0) 21.93%
        ),
        linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
        url(${bg_image_l2});`}
    }
  }
`;

export const Herowrapper = styled.div`
  max-width: 279px;

  width: 68%;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 483px;
  }

  @media (min-width: 1440px) {
    max-width: 715px;
  }
`;

export const Herodescription = styled.div`
  /* height: 72px, auto; */
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 40px;

  width: 319px;

  @media (min-width: 768px) {
    width: 470px;
  }
  @media (min-width: 1440px) {
    width: 500px;
  }
`;

export const Herobackground = styled.div`
  position: absolute;
  width: 45%;
  height: 25%;
  top: 60%;
  left: 85%;

  border-radius: 50%;

  background-image: radial-gradient(
    circle,
    rgba(64, 112, 205, 0.9),
    rgba(64, 112, 205, 0.9)
  );
  filter: blur(80px);
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 45%;
    height: 30%;
    top: 55%;
    left: 90%;
    filter: blur(80px);
  }

  @media (min-width: 1440px) {
    width: 25%;
    height: 65%;
    top: 70%;
    left: 90%;
    filter: blur(190px);
  }
`;
