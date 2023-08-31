import styled from "@emotion/styled";

export const getStyledCloseIcon = (component) => styled(component)`
	width: 38px;
	height: 38px;
	fill: #ffffff;
`;

export const BackDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
	width: 335px;
	padding: 50px 25px;
	background: ${(props) => props.theme.colors.blue};
	border-radius: 16px;

	@media (min-width: 768px) {
		width: 500px;
		padding: 50px 50px 75px 50px;
	}
`;

export const CloseBtn = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	width: 24px;
	height: 24px;
	padding: 0;
	display: flex;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media (min-width: 768px) {
		top: 18px;
		right: 18px;
		width: 32px;
		height: 32px;
	}
`;
