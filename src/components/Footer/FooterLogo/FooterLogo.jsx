import React from "react";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { LogoText, LogoWrapper, getStyledIcon } from "./FooterLogo.styled";

const StyledLogoIcon = getStyledIcon(LogoIcon);

 const FooterLogo = () => {
    return (
        <NavLink to="/">
        <LogoWrapper>
            
                <StyledLogoIcon/>
            
            <LogoText>Drink Master</LogoText>
            </LogoWrapper>
        </NavLink>
    );
};

export default FooterLogo;