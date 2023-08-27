import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainPage from "./pages/MainPage/MainPage";
import DrinksPage from "./pages/DrinksPage/DrinksPage";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import WelcomePage from "./pages/WellcomPage/WellcomPage";
import { AppWrapper } from "./App.styled";
import RecipePage from "./pages/RecipePage/RecipePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MyCoctailsPage from "./pages/MyCoctailsPage/MyCoctailsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <h2>Loading</h2>
  ) : (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<MainPage />} /> */}
          <Route
            path="main"
            element={
              <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
            }
          />
          <Route
            path="drinks"
            element={
              <PrivateRoute redirectTo="/welcome" component={<DrinksPage />} />
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<AddRecipePage />}
              />
            }
          />
          <Route
            path="recipe"
            element={
              <PrivateRoute redirectTo="/welcome" component={<RecipePage />} />
            }
          />
          <Route
            path="my"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<MyCoctailsPage />}
              />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<FavoritePage />}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route
          path="signin"
          element={
            <RestrictedRoute redirectTo="/main" component={<SignInPage />} />
          }
        />
        <Route
          path="signup"
          element={
            <RestrictedRoute redirectTo="/main" component={<SignUpPage />} />
          }
        />
        <Route
          path="welcome"
          element={
            <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
          }
        />
      </Routes>
    </AppWrapper>
  );
}
export default App;
