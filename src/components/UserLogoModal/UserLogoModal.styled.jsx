import styled from "@emotion/styled";

export const getStyledEdit = (component) => styled(component)`
	width: 14px;
	height: 14px;
`;

export const Drop = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 177px;
	padding: 18px;
	background: ${(props) => props.theme.colors.blue};
	border-radius: 8px;
	transform: ${({ setOpenDrop }) =>
		setOpenDrop ? "translateX(-20%)" : "translateY(100%)"};
	z-index: 500;
`;

export const EditButton = styled.button`
	width: 141px;
	background: transparent;
	font-size: 14px;
	text-align: left;
	border: none;
	margin-bottom: 38px;
	color: ${(props) => props.theme.colors.white};

	
	&:focus {
		outline: none;
`;

export const SvgButton = styled.div`
	position: absolute;
	top: 16%;
	right: 10%;
	width: 14px;
	height: 14px;
	border: none;
	background: transparent;
`;

export const LogOutButton = styled.button`
	width: 100%;
	background: ${(props) => props.theme.colors.white};
	font-size: 14px;
	text-align: center;
	border: none;
	border-radius: 42px;
	padding: 12px 45px;
`;
