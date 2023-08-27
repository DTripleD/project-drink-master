import styled from "@emotion/styled";

export const LogoText = styled.p`
	color: #f3f3f3;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: 1.125;
	margin: 0;

	@media (min-width: 768px) {
		font-size: 18px;
		letter-spacing: 1.22;
		width: 151px;
	}
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	@media (min-width: 768px) {
		gap: 14px;
	}
`;

export const getStyledLogo = (component) => styled(component)`
	width: 22px;
	height: 22px;
	fill: #f3f3f3;
	@media (min-width: 768px) {
		width: 28px;
		height: 28px;
	}
`;
