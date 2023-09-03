import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
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
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./shared/toasterOptions/toasterOptions";
import { selectTheme } from "./redux/theme/selectors";
import theme from "./shared/theme";

// import Loader from "./components/Loader/Loader";
import { ThemeProvider } from "@emotion/react";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const currentTheme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {}, [currentTheme]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme(currentTheme)}>
      <AppWrapper>
        <Routes>
          <Route
            index
            element={
              <RestrictedRoute component={<WelcomePage />} redirectTo="/main" />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute component={<SignInPage />} redirectTo="/main" />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute component={<SignUpPage />} redirectTo="/main" />
            }
          />

          <Route path="/" element={<SharedLayout />}>
            <Route
              path="/main"
              element={<PrivateRoute component={<MainPage />} />}
            />
            <Route
              path="/drinks"
              element={<PrivateRoute component={<DrinksPage />} />}
            />
            <Route
              path="/add"
              element={<PrivateRoute component={<AddRecipePage />} />}
            />
            <Route
              path="/recipe/:recipeId"
              element={<PrivateRoute component={<RecipePage />} />}
            />
            <Route
              path="/my"
              element={<PrivateRoute component={<MyCoctailsPage />} />}
            />
            <Route
              path="/favorite"
              element={<PrivateRoute component={<FavoritePage />} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Toaster toastOptions={toastOptions} />
      </AppWrapper>
    </ThemeProvider>
  );
}
export default App;
