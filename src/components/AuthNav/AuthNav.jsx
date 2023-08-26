import { NavLink, useLocation } from 'react-router-dom';
import styled from "@emotion/styled";

export const AuthNavigate = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/singup' ? (
        <StyledNavLink to="/signin">Sign In</StyledNavLink>
      ) : (
        <StyledNavLink to="/singup">Registration</StyledNavLink>
      )}
    </>
  );
};

export const StyledNavLink = styled(NavLink)``;