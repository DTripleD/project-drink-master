import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  padding: 8px 100px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(180, 180, 180, 0.6);
  box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #ff0000;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 100px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(180, 180, 180, 0.6);
  box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
`;
