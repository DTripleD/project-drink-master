import styled from "@emotion/styled";

export const getStyledEdit = (component) => styled(component)`
	width: 14px;
	height: 14px;
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
	width: 177px;
	padding: 18px;
	background: #161f37;
	border-radius: 8px;
`;

export const EditButton = styled.button`
	width: 100%;
	background: transparent;
	font-size: 14px;
	text-align: left;
	border: none;
	margin-bottom: 38px;
	color: #f3f3f3;
`;

export const SvgButton = styled.div`
	position: absolute;
	top: 152px;
	right: 165px;
	width: 14px;
	height: 14px;
	border: none;
	background: transparent;
`;

export const LogOutButton = styled.button`
	width: 100%;
	background: #f3f3f3;
	font-size: 14px;
	text-align: center;
	border: none;
	border-radius: 42px;
	padding: 12px 45px;
`;
