import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
// import { selectIsLoggedIn } from "redux/auth/selectors";
// import { useSelector } from "react-redux";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
