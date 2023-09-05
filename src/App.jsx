import "./App.css";
import { AppWrapper } from "./App.styled";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";

import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { selectTheme } from "./redux/theme/selectors";

import { toastOptions } from "./shared/toasterOptions/toasterOptions";
import theme from "./shared/theme";

import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const DrinksPage = lazy(() => import("./pages/DrinksPage/DrinksPage"));
const AddRecipePage = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const MyCoctailsPage = lazy(() =>
  import("./pages/MyCoctailsPage/MyCoctailsPage")
);

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
