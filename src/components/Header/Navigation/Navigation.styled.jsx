import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
	padding: 8px 16px;
	border-radius: 40px;
	border: 1px solid rgba(243, 243, 243, 0.2);
	text-decoration: none;
	color: #f3f3f3;
	background-color: transparent;
	font-weight: 500;
	font-size: 14px;

	transition: background-color 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

	&.active {
		background-color: #161f37;
	}
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: colum;
	align-items: center;
	justify-content: center;
	gap: 16px;
	width: 100%;

	@media (min-width: 1440px) {
		flex-direction: row;
	}
`;
