import styled from "@emotion/styled";

export const getStyledOpenIcon = (component) => styled(component)`
	.bm-burger-button {
		width: 38px;
		height: 38px;
		fill: FFFFFF;
	}
`;

export const getStyledCloseIcon = (component) => styled(component)`
	.bm-cross-button {
		width: 38px;
		height: 38px;
		fill: FFFFFF;
	}
`;

export const MenuWrepper = styled.div`
	margin-left: 14px;

	@media (min-width: 768px) {
		margin-left: 24px;
	}

	@media (min-width: 1440px) {
		display: none;
	}
`;
