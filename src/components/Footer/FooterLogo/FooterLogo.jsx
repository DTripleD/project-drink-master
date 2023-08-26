import React from "react";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";

import { LogoText, LogoWrapper, getStyledIcon } from "./FooterLogo.styled";

const StyledLogoIcon = getStyledIcon(LogoIcon);

 const FooterLogo = () => {
    return (
        <LogoWrapper>
            
                <StyledLogoIcon/>
            
            <LogoText>Drink Master</LogoText>
        </LogoWrapper>
    );
};

export default FooterLogo;