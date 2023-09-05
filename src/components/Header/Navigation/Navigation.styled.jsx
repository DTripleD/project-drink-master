import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
	padding: 8px 16px;
	border-radius: 40px;
	border: 1px solid
		${({ theme }) =>
			theme.currentTheme === "light"
				? theme.colors.white
				: "rgba(243, 243, 243, 0.2)"};
	text-decoration: none;
	color: ${(props) => props.theme.colors.white};
	background-color: transparent;
	font-weight: 500;
	font-size: 14px;

	transition: background-color 0.4s ease;

	&.active {
		background-color: ${(props) => props.theme.colors.blue};
		color: ${({ theme }) =>
			theme.currentTheme === "light" ? theme.colors.black : theme.colors.white};

		&:hover {
			color: ${(props) => props.theme.colors.white};
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	width: 100%;

	@media (min-width: 1440px) {
		flex-direction: row;
		width: 526px;
	}
`;
