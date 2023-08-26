import styled from "@emotion/styled";

export const StyledInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  gap: 18px;
	border-radius: 8px;
	background: rgba(22, 31, 55, 0.5);
	width: 335px;
	height: 320px;
	@media (min-width: 1440px) {
		width: 440px;
		height: 440px;
	}
`;

export const AddImageButton = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 6px;
	background: #f3f3f3;
	cursor: pointer;
  &:hover {
    transform: 1.2;
  }
`;

export const AddImageTitle = styled.p`
	color: #f3f3f3;
	font-family: Manrope;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: ${20/16}px;
`;
