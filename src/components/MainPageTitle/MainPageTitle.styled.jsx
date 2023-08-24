import styled from "@emotion/styled";

const MainTitle = styled.h2`
	color: #f3f3f3;
	font-family: Manrope;
	font-style: normal;
	font-weight: 600;
	font-size: 32px;
	line-height: ${38 / 32}px;
	@media (min-width: 768px) {
		font-size: 56px;
		line-height: ${60 / 56}px;
	}
	@media (min-width: 1440px) {
		font-size: 64px;
		line-height: ${68 / 64}px;
	}
`;

export default MainTitle;
