
import React from 'react';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import Nav from '../Nav/Nav';
// import FollowUs from '../FollowUs/FollowUs';
import {
  StyledBottomWrapper,
  StyledContainer,
  StyledFlexWrapper,
  StyledFooter,
  StyledWrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledContainer>
          {/* <FollowUs /> */}
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
  );
};

export default Footer;






// const Footer = () => {
//   return <div>Footer</div>;
// };

// export default Footer;