import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  const shouldRedirect = false;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};
