import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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