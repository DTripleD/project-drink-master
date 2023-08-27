import React from "react";
import { ReactComponent as LogoSVGIcon } from "../../../images/svg/logo.svg";

import { LogoText, LogoWrapper, getStyledLogo } from "./Logo.styled";

const StyledLogo = getStyledLogo(LogoSVGIcon);

export const Logo = () => {
	return (
		<LogoWrapper>
			<StyledLogo />
			<LogoText>Drink Master</LogoText>
		</LogoWrapper>
	);
};
