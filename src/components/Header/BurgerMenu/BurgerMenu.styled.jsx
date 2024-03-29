import styled from "@emotion/styled";

export const getStyledOpenIcon = (component) => styled(component)`
  width: 38px;
  height: 38px;
  stroke: ${(props) => props.theme.colors.white};
`;

export const getStyledCloseIcon = (component) => styled(component)`
  width: 38px;
  height: 38px;
  stroke: ${(props) => props.theme.colors.white};
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
  transition: transform 0.4s ease-in-out;
`;

export const StyledMenuBtn = styled.button`
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
  transition: transform 0.4s ease, outline 0.4s ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    outline: none;
  }

  @media (min-width: 768px) {
    top: 23px;
    right: 22px;

    width: 38px;
    height: 38px;
  }
`;

export const StyledBurger = styled.button`
  display: flex;

  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: transform 0.4s ease, outline 0.4s ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    outline: none;
  }

  @media (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;
