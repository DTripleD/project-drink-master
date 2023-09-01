import React from "react";
import { ReactComponent as LogoSVGIcon } from "../../../images/svg/logo.svg";
import { NavLink } from "react-router-dom";
import { LogoText, LogoWrapper, getStyledLogo } from "./Logo.styled";

const StyledLogo = getStyledLogo(LogoSVGIcon);

export const Logo = () => {
	return (
		<NavLink to="/">
			<LogoWrapper>
				<StyledLogo />
				<LogoText>Drink Master</LogoText>
			</LogoWrapper>
		</NavLink>
	);
};
