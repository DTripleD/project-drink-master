// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  // const shouldRedirect = true;

  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;

  return Component;
};
