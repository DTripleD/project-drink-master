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
        <StyledLink to="/">Home</StyledLink>
        {true && <StyledLink to="/drinks">Drinks</StyledLink>}
        {true && <StyledLink to="/add">Add recipe</StyledLink>}
        {true && <StyledLink to="/my">My recipes</StyledLink>}
        {true && <StyledLink to="/favorite">Favorites</StyledLink>}
      </nav>
      {/* {isLoggedIn ? <UserMenu /> : <WelcomePage />} */}

      <UserMenu />
    </HeaderStyled>
  );
};

export default Header;
