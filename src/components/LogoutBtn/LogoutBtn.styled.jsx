import styled from "@emotion/styled";

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
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: 335px;
	padding: 50px 25px;
	background: ${(props) => props.theme.colors.blue};
	border-radius: 16px;

	@media (min-width: 768px) {
		width: 500px;
		padding: 50px;
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

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

export const ModalText = styled.p`
	color: #f3f3f3;
	font-size: 14px;

	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

export const LogoutButton = styled.button`
	padding: 16px 41px;
	color: #161f37;
	background: #f3f3f3;
	font-size: 16px;

	@media (min-width: 768px) {
		padding: 18px 69px;
	}
`;

export const CanceltBtn = styled.button`
	padding: 16px 41px;
	color: #f3f3f3;
	background: #434d67;
	font-size: 16px;

	@media (min-width: 768px) {
		padding: 18px 69px;
	}
`;
