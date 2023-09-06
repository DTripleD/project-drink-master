import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Nav from "../Nav/Nav";
import FollowUs from "../FollowUs/FollowUs";
import FooterLogo from "./FooterLogo/FooterLogo";
import { MainContainer } from "../MainContainer/MainContainer";

import {
  StyledBottomWrapper,
  StyledContainer,
  StyledFlexWrapper,
  StyledFooter,
  StyledWrapper,
  StyledBox,
} from "./Footer.styled";

const Footer = () => {
  return (
    <MainContainer>
      <StyledFooter>
        <StyledWrapper>
          <StyledContainer>
            <StyledBox>
              <FooterLogo />
              <FollowUs />
            </StyledBox>

            <Nav />
          </StyledContainer>
          <SubscribeForm />
        </StyledWrapper>
        <StyledBottomWrapper>
          <p>&#169;2023 Drink Master. All rights reserved.</p>
          <StyledFlexWrapper>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </StyledFlexWrapper>
        </StyledBottomWrapper>
      </StyledFooter>
    </MainContainer>
  );
};

export default Footer;
