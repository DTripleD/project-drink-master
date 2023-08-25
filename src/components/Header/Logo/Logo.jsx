import React from "react";
import { ReactComponent as LogoSVGIcon } from "../../../images/svg/logo.svg";
import { css } from "@emotion/react";
import { LogoText, LogoWrapper } from "./Logo.styled";

export const Logo = () => {
	return (
		<LogoWrapper>
			<LogoSVGIcon
				css={css`
					width: "22px";
					height: "22px";
					@media (min-width: 768px) {
						width: "28px";
						height: "28px";
					}
				`}
			/>
			<LogoText>Drink Master</LogoText>
		</LogoWrapper>
	);
};
