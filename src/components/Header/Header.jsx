// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { HeaderStyled, StyledLink } from "./Header.styled";
// import WelcomePage from "../../pages/WellcomPage/WellcomPage";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyled>
      <nav>
        <StyledLink to="/project-drink-master">Home</StyledLink>
        {true && (
          <StyledLink to="/project-drink-master/drinks">Drinks</StyledLink>
        )}
        {true && (
          <StyledLink to="/project-drink-master/add">Add recipe</StyledLink>
        )}
        {true && (
          <StyledLink to="/project-drink-master/my">My recipes</StyledLink>
        )}
        {true && (
          <StyledLink to="/project-drink-master/favorite">Favorites</StyledLink>
        )}
      </nav>
      {/* {isLoggedIn ? <UserMenu /> : <WelcomePage />} */}

      <UserMenu />
    </HeaderStyled>
  );
};

export default Header;
