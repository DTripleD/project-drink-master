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

function App() {
  return (
    <AppWrapper>
      <Routes> 
        <Route path="/" element={<SharedLayout />}> 
          <Route index element={<MainPage />} /> 
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
            path="my" 
            element={ 
              <PrivateRoute redirectTo="/welcome" component={<MainPage />} /> 
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
        </Route> 
      </Routes> 
    </AppWrapper>
  );
}
export default App;
