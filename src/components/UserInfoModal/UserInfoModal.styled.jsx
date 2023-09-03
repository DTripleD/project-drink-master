import styled from "@emotion/styled";

export const getStyledCloseIcon = (component) => styled(component)`
	width: 38px;
	height: 38px;
	fill: ${(props) => props.theme.colors.white};
`;

export const getStyledEdit = (component) => styled(component)`
	width: 20px;
	height: 20px;
`;

export const getStyledPlus = (component) => styled(component)`
	width: 28px;
	height: 28px;
	fill: ${(props) => props.theme.colors.white};

	@media (min-width: 768px) {
		width: 32px;
		height: 32px;
	}
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
	justify-content: center;
	background-color: transparent;
	border: none;

	cursor: pointer;

	@media (min-width: 768px) {
		top: 18px;
		right: 18px;
		width: 32px;
		height: 32px;
	}

	&:focus {
		outline: none;
	}
`;

export const AvatarWrapper = styled.div`
	position: relative;
	margin-bottom: 39px;

	@media (min-width: 768px) {
		margin-bottom: 66px;
	}
`;

export const Avatar = styled.img`
	display: block;
	width: 80px;
	height: 80px;
	object-fit: cover;
	margin: 0 auto;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;

export const AvatarInput = styled.input`
	display: none;
`;

export const AvatarIcon = styled.label`
	position: absolute;
	bottom: -15%;
	left: 46%;
	width: 28px;
	height: 28px;
	background-color: #546081;
	border: none;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 32px;
		height: 32px;
	}
`;

export const InputWrapper = styled.label`
	position: relative;
`;

export const Input = styled.input`
	width: 285px;
	margin-bottom: 18px;
	padding: 18px 24px;

	border: 1px solid rgba(243, 243, 243, 0.2);
	border-radius: 200px;
	outline: none;
	opacity: 0.8;

	font-size: 14px;
	color: ${(props) => props.theme.colors.white};
	background-color: transparent;

	@media (min-width: 768px) {
		width: 400px;
		padding: 18px 68px 18px 24px;
		margin-bottom: 25px;
		font-size: 17px;
	}

	&:hover,
	&:focus {
		border: 1px solid rgba(243, 243, 243, 0.5);
	}
`;

export const InputIcon = styled.div`
	position: absolute;
	top: 0;
	right: 24px;

	display: none;

	width: 20px;
	height: 20px;

	@media (min-width: 768px) {
		display: block;
	}
`;

export const SaveButton = styled.button`
	width: 285px;
	padding: 18px 90px;

	border-radius: 42px;
	border: 2px solid transparent;
	background-color: ${(props) => props.theme.colors.white};

	color: ${(props) => props.theme.colors.blue};
	font-size: 14px;

	font-weight: 600;

	&:hover {
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.blue};
	}

	&:active {
		border: 2px solid ${(props) => props.theme.colors.white};
	}

	&:disabled {
		color: ${(props) => props.theme.colors.white};
		background-color: ${(props) => props.theme.colors.grey};
		border: 2px solid ${(props) => props.theme.colors.grey};
	}

	@media (min-width: 768px) {
		padding: 18px 44px;
		width: 400px;
		font-size: 16px;
	}
`;
