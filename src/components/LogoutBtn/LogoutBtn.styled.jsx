import styled from "@emotion/styled";

export const getStyledCloseIcon = (component) => styled(component)`
	width: 38px;
	height: 38px;
	fill: ${(props) => props.theme.colors.white};
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
	position: relative;
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
	justify-content: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: transform 0.4s ease, outline 0.4s ease;

	@media (min-width: 768px) {
		top: 18px;
		right: 18px;
		width: 32px;
		height: 32px;
	}

	&:focus,
	&:hover {
		outline: none;
		transform: translateY(-3px);
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

export const ModalText = styled.p`
	color: ${(props) => props.theme.colors.white};
	font-size: 14px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 18px;
	}
`;

export const LogoutButton = styled.button`
	padding: 16px 41px;
	color: ${(props) => props.theme.colors.blue};
	background: ${(props) => props.theme.colors.white};
	font-size: 16px;
	font-weight: 600;
	border-radius: 42px;
	cursor: pointer;
	transition: background-color 400ms ease, color 400ms ease, outline 400ms ease,
		border 400ms ease;

	@media (min-width: 768px) {
		padding: 18px 69px;
	}

	&:focus,
	&:hover {
		outline: none;
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.blue};
		border: 1px solid rgba(243, 243, 243, 0.2);
	}
`;

export const CanceltBtn = styled.button`
	padding: 16px 41px;
	color: ${(props) => props.theme.colors.white};
	background: ${(props) => props.theme.colors.grey};
	font-size: 16px;
	font-weight: 600;
	border-radius: 42px;
	cursor: pointer;
	transition: background-color 400ms ease, color 400ms ease, outline 400ms ease,
		border 400ms ease;

	@media (min-width: 768px) {
		padding: 18px 69px;
	}

	&:focus,
	&:hover {
		outline: none;
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.blue};
		border: 1px solid rgba(243, 243, 243, 0.2);
	}
`;
