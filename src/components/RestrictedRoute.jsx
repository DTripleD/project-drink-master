// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "redux/auth/selectors";

// export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
// eslint-disable-next-line react/prop-types
export const RestrictedRoute = ({ redirectTo = "/" }) => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  //   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return <Navigate to={redirectTo} />;
};
