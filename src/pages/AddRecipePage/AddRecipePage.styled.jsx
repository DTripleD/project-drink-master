import styled from "@emotion/styled";

export const GridContainer = styled.div`
	@media (min-width: 1440px) {
		display: flex;
		align-items: flex-start;
		gap: 94px;
		margin-bottom: 140px;
	}
`;

export const GridSecondContainer = styled.div`
	@media (min-width: 1440px) {
		display: flex;
		flex-direction: column;
		gap: 80px;
	}
`;

export const GridThirdConatiner = styled.div`
	margin-top: 80px;
	display: flex;
	aling-items: left;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media (min-width: 768px) {
		gap: 24px;
	}
	@media (min-width: 1440px) {
		margin-top: 0;
	}
`;

export const GridFourthConatiner = styled.div`
	margin-top: 40px;
	display: flex;
	aling-items: left;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	margin-bottom: 80px;
	@media (min-width: 768px) {
		gap: 40px;
		margin-bottom: 140px;
	}
	@media (min-width: 1440px) {
		margin-top: 0;
		margin-bottom: 0px;
	}
`;

export const Title = styled.h3`
	color: ${(props) => props.theme.colors.white};
	font-family: Manrope;
	font-size: 18px;
	font-weight: 500;
	line-height: ${24/18};
	@media (min-width: 768px) {
		font-size: 24px;
		line-height: ${32 / 24};
	}
`;
