// import { useSelector } from "react-redux";
import { Nav, StyledLink } from "./Navigation.styled";
// import { selectIsLoggedIn } from "redux/auth/authSelectors";

export const Navigation = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Nav>
        {true && <StyledLink to="/main">Home</StyledLink>}
        {true && <StyledLink to="/drinks">Drinks</StyledLink>}
        {true && <StyledLink to="/add">Add recipe</StyledLink>}
        {true && <StyledLink to="/my">My recipes</StyledLink>}
        {true && <StyledLink to="/favorite">Favorites</StyledLink>}
      </Nav>
    </>
  );
};
