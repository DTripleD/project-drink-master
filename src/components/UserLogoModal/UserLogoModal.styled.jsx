import styled from "@emotion/styled";

export const getStyledEdit = (component) => styled(component)`
  width: 14px;
  height: 14px;
`;

export const Drop = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0;
  width: 177px;
  padding: 18px;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.colors.backgroundLight
      : theme.colors.blue};
  border-radius: 8px;
  transform: ${({ setOpenDrop }) =>
    setOpenDrop ? "translateX(0)" : "translateY(100%)"};
  z-index: 500;
`;

// export const Drop = styled.div`
// 	position: absolute;
// 	top: 0;
// 	right: 20%;
// 	width: 177px;
// 	padding: 18px;
// 	background: ${(props) => props.theme.colors.blue};
// 	border-radius: 8px;
// 	transform: ${({ setOpenDrop }) =>
// 		setOpenDrop ? "translateX(0)" : "translateY(100%)"};
// 	z-index: 500;

// `;

export const EditButton = styled.button`
	// width: 141px;
	background: transparent;
	font-size: 14px;
	font-weight:500;
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
  display: block;
  width: 100%;
  line-height: 1.28;
  background-color: ${(props) => props.theme.colors.white};
  color: ${({ theme }) =>
    theme.currentTheme === "light" ? theme.colors.black : theme.colors.blue};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: 42px;
  padding: 12px 40px;
`;
