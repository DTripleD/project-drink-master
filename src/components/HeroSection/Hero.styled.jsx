import heroimgDark from "../../images/porto-glass.jpg";
import styled from "@emotion/styled";
// import heroImgFoto from "../../images/mae-mu-T7heq8rawkc-unsplash1.jpg";

export const Hero = styled.section`
  position: relative;
  background-image: ${(props) =>
    props.currenttheme === "dark" || `url(${heroimgDark})`};

  background-position: top 0px right -320px;

  background-repeat: no-repeat;
  background-size: auto;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    background-position: top 0px right -230px;
    background-size: contain;
  }

  @media (min-width: 1440px) {
    background-position: top 0px right 0px;

    background-size: contain;
  }
`;

export const Herowrapper = styled.div`
  padding: 164px 0px 200px 0px;
  width: 68%;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 184px 0px 200px 0px;
  }

  @media (min-width: 1440px) {
    padding: 244px 0px 300px 0px;
  }
`;

export const Herodescription = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 40px;
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
