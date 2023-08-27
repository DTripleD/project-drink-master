import { useLocation } from "react-router-dom";
import {StyledNavLink} from './AuthNav.styled';

export const AuthNavigate = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/signup" ? (
        <StyledNavLink to="/signin">Sign In</StyledNavLink>
      ) : (
        <StyledNavLink to="/signup">Registration</StyledNavLink>
      )}
    </>
  );
};


