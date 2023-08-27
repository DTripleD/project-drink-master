import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 100px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(180, 180, 180, 0.6);
  box-shadow: 0 20px 16px -16px rgba(0, 0, 0, 0.6);
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

export const SharedLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1200px; */
  width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  // phone screen
  @media screen and (min-width: 375px) {
    width: 375px;
  }

  // tablet
  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  // desktop
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
