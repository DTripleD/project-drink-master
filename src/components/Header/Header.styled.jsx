import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	border-bottom: 1px solid rgba(243, 243, 243, 0.2);

	width: 100%;
	box-sizing: border-box;

	@media (min-width: 768px) {
		padding: 20px 32px;
	}

	@media (min-width: 1440px) {
		padding: 20px 100px;
	}
`;

export const MenuWrepper = styled.div`
	margin-left: 14px;
	z-index: 800;

	@media (min-width: 768px) {
		margin-left: 24px;
	}

	@media (min-width: 1440px) {
		display: none;
	}
`;
