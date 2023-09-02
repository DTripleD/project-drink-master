import styled from "@emotion/styled";

export const getStyledOpenIcon = (component) => styled(component)`
	width: 38px;
	height: 38px;
	fill: #ffffff;
`;

export const getStyledCloseIcon = (component) => styled(component)`
	width: 38px;
	height: 38px;
	fill: #ffffff;
`;
export const StyledMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.theme.colors.black};
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
	height: 100vh;
	width: 100vw;
	overflow: hidden;

	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
`;

export const StyledBurger = styled.button`
	position: fixed;
	top: 20px;
	right: 20px;

	display: flex;

	justify-content: center;
	width: 32px;
	height: 32px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}

	@media (min-width: 768px) {
		top: 23px;
		right: 22px;

		width: 38px;
		height: 38px;
	}
`;
