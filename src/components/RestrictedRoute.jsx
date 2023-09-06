import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};
