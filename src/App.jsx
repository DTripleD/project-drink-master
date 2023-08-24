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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="main"
            element={
              <PrivateRoute redirectTo="/main" component={<MainPage />} />
            }
          />
          <Route
            path="drinks"
            element={
              <PrivateRoute redirectTo="/drinks" component={<DrinksPage />} />
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute redirectTo="/add" component={<AddRecipePage />} />
            }
          />
          <Route
            path="my"
            element={<PrivateRoute redirectTo="/my" component={<MainPage />} />}
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute
                redirectTo="/favorite"
                component={<FavoritePage />}
              />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute
                redirectTo="/signin"
                component={<SignInPage />}
              />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute
                redirectTo="/signup"
                component={<SignUpPage />}
              />
            }
          />
           <Route
            path="welcome"
            element={
              <RestrictedRoute
                redirectTo="/welcome"
                component={<WelcomePage />}
              />
            }
          />
        </Route>
       </Routes>
    </>
  );
}

export default App;
