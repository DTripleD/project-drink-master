import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  const shouldRedirect = false;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
