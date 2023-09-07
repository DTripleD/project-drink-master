import styled from "@emotion/styled";

export const getStyledEdit = (component) => styled(component)`
  stroke: ${(props) => props.theme.colors.white};
  width: 14px;
  height: 14px;
`;

export const Drop = styled.div`
  position: absolute;
  bottom: -22px;
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
  margin: 0;
`;

export const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

export const EditButton = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  border: none;

  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const SvgButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  transition: color 0.4s ease, bacground-color 0.4s ease, border 0.4s ease;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.blue};
    outline: 1px solid rgba(243, 243, 243, 0.2);
  }
`;
